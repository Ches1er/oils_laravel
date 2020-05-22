<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsAceaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods_acea', function (Blueprint $table) {
            $table->bigInteger('id_acea')->unsigned();
            $table->bigInteger('id_goods')->unsigned();
            $table->timestamps();

            $table->foreign('id_acea')->references('id')->on('acea');
            $table->foreign('id_goods')->references('id')->on('goods_oils');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goods_acea');
    }
}
