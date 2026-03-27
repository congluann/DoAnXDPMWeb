<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AuthController;


Route::get('/products', [ProductController::class, 'index']);

// Thêm Route Đăng nhập
Route::post('/auth/login', [AuthController::class, 'login']);