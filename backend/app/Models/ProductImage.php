<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $primaryKey = 'image_id';
    protected $table = 'product_images';

    protected $fillable = [
        'product_id',
        'image_url'
    ];
}