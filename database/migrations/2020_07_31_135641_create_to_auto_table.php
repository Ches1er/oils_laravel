<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateToAutoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('to_auto', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->bigInteger('id_image')->unsigned();
            $table->timestamps();

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
        Schema::dropIfExists('to_auto');
    }
}
