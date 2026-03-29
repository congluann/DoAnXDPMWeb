<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSpecification extends Model
{
    protected $primaryKey = 'spec_id';
    protected $table = 'product_specifications';

    protected $fillable = [
        'product_id',
        'spec_name',
        'spec_value'
    ];
}