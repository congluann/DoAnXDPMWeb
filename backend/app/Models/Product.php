<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// thêm 3 dòng này
use App\Models\ProductSpecification;
use App\Models\ProductImage;
use App\Models\ProductVariant;

class Product extends Model
{
    use HasFactory;

    protected $primaryKey = 'product_id';

    public function specifications()
    {
        return $this->hasMany(ProductSpecification::class, 'product_id');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class, 'product_id');
    }
}