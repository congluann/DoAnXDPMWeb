<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    // =========================
    // LẤY GIỎ HÀNG
    // =========================
    public function index($user_id)
{
    $cart = Cart::where('user_id', $user_id)->first();

    if (!$cart) return response()->json([]);

    $items = DB::table('cart_items')
        ->join('product_variants', 'cart_items.variant_id', '=', 'product_variants.variant_id')
        ->join('products', 'product_variants.product_id', '=', 'products.product_id')
        ->where('cart_items.cart_id', $cart->cart_id)
        ->select(
            'cart_items.cart_item_id',
            'products.name',
            'product_variants.color',
            'product_variants.storage',
            'product_variants.price',
            'product_variants.image_url',
            'cart_items.quantity',
            DB::raw('product_variants.price * cart_items.quantity as total')
        )
        ->get();

    return response()->json($items);
}
    // =========================
    // THÊM VÀO GIỎ HÀNG
    // =========================
    public function add(Request $request)
    {
        $user_id = 1; // test user 1

        $cart = Cart::firstOrCreate([
            'user_id' => $user_id
        ]);

        $item = CartItem::where('cart_id', $cart->cart_id)
            ->where('variant_id', $request->variant_id)
            ->first();

        if ($item) {
            $item->quantity += $request->quantity;
            $item->save();
        } else {
            CartItem::create([
                'cart_id' => $cart->cart_id,
                'variant_id' => $request->variant_id,
                'quantity' => $request->quantity
            ]);
        }

        return response()->json([
            'message' => 'Added to cart'
        ]);
    }

    // =========================
    // TĂNG GIẢM SỐ LƯỢNG
    // =========================
    public function updateQuantity(Request $request)
    {
        $item = CartItem::where('cart_item_id', $request->cart_item_id)->first();

        if (!$item) return response()->json(['message' => 'Item not found']);

        $item->quantity = $request->quantity;
        $item->save();

        return response()->json(['message' => 'Quantity updated']);
    }

    // =========================
    // XÓA SẢN PHẨM
    // =========================
    public function remove($id)
    {
        $item = CartItem::find($id);

        if (!$item) return response()->json(['message' => 'Item not found']);

        $item->delete();

        return response()->json(['message' => 'Item removed']);
    }

    // =========================
    // CHECKOUT
    // =========================
    public function checkout()
    {
        $user_id = 1; // test user 1

        $cart = Cart::where('user_id', $user_id)->first();
        if (!$cart) return response()->json(['message' => 'Cart empty']);

        $items = CartItem::where('cart_id', $cart->cart_id)->get();
        if ($items->count() == 0) return response()->json(['message' => 'Cart empty']);

        $total = 0;

        foreach ($items as $item) {
            $variant = DB::table('product_variants')
                ->where('variant_id', $item->variant_id)
                ->first();

            if ($variant) {
                $total += $variant->price * $item->quantity;
            }
        }

        // tạo order
        $order_id = DB::table('orders')->insertGetId([
            'user_id' => $user_id,
            'total_price' => $total,
            'created_at' => now()
        ]);

        // thêm order items
        foreach ($items as $item) {

            $variant = DB::table('product_variants')
                ->where('variant_id', $item->variant_id)
                ->first();

            if ($variant) {
                DB::table('order_items')->insert([
                    'order_id' => $order_id,
                    'variant_id' => $item->variant_id,
                    'price' => $variant->price,
                    'quantity' => $item->quantity
                ]);
            }
        }

        // xoá cart
        CartItem::where('cart_id', $cart->cart_id)->delete();

        return response()->json([
            'message' => 'Order success',
            'order_id' => $order_id,
            'total_price' => $total
        ]);
    }
}