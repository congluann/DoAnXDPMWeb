<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 1. Kiểm tra dữ liệu gửi lên
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        // 2. Tìm user trong Database theo username
        $user = User::where('username', $request->username)->first();

        // 3. Kiểm tra mật khẩu
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Tài khoản hoặc mật khẩu không chính xác!'
            ], 401);
        }

        // 4. Nếu đúng, tạo Token bảo mật
        $token = $user->createToken('auth_token')->plainTextToken;

        // 5. Trả về thông tin cho React
        return response()->json([
            'status' => 'success',
            'message' => 'Đăng nhập thành công!',
            'token' => $token,
            'role' => $user->role,
            'user_id' => $user->user_id
        ], 200);
    }
}
