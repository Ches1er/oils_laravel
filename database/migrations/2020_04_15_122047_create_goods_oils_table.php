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
            $table->bigInteger('id_brand')->unsigned();
            $table->bigInteger('id_image')->unsigned();
            $table->mediumText('short_desc');
            $table->mediumText('full_desc');
            $table->timestamps();

            $table->foreign('id_volume')->references('id')->on('volume');
            $table->foreign('id_viscosity')->references('id')->on('viscosity');
            $table->foreign('id_base')->references('id')->on('base');
            $table->foreign('id_brand')->references('id')->on('brands');
            $table->foreign('id_image')->references('id')->on('images');
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
