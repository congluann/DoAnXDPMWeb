<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id'); // Khóa chính đổi thành product_id cho khớp React
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2); // Kiểu số cho giá tiền
            $table->string('image_url')->nullable(); // Đường dẫn ảnh
            $table->timestamps(); // Tạo ra created_at và updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
