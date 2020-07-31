<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateToGoods extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('to_goods', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->float('price');
            $table->string('cat_number')->unique();
            $table->bigInteger('id_group')->unsigned();
            $table->bigInteger('id_exchange')->unsigned();
            $table->timestamps();

            $table->foreign('id_group')->references('id')->on('to_groups');
            $table->foreign('id_exchange')->references('id')->on('to_price_exchange');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('to_goods');
    }
}
