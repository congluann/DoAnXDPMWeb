<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    protected $primaryKey = 'variant_id';
    protected $table = 'product_variants';

    protected $fillable = [
        'product_id',
        'color',
        'storage',
        'price',
        'stock_quantity',
        'image_url'
    ];
}