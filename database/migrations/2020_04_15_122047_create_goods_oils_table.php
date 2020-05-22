<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsOilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('goods_oils', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('art')->unique();
            $table->string('name')->unique();
            $table->bigInteger('id_volume')->unsigned();
            $table->bigInteger('id_viscosity')->unsigned();
            $table->bigInteger('id_base')->unsigned();
            $table->timestamps();

            $table->foreign('id_volume')->references('id')->on('volume');
            $table->foreign('id_viscosity')->references('id')->on('viscosity');
            $table->foreign('id_base')->references('id')->on('base');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('goods_oils');
    }
}
