<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTypesBrandTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_types_brands', function (Blueprint $table) {
            $table->bigInteger('id_brand')->unsigned();
            $table->bigInteger('id_product_type')->unsigned();
            $table->timestamps();

            $table->foreign('id_brand')->references('id')->on('brands');
            $table->foreign('id_product_type')->references('id')->on('product_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_types_brands');
    }
}
