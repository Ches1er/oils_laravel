<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePsaApprovalGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('psa_approval_goods', function (Blueprint $table) {
            $table->bigInteger('id_approval')->unsigned();
            $table->bigInteger('id_goods')->unsigned();
            $table->timestamps();

            $table->foreign('id_approval')->references('id')->on('psa_approval');
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
        Schema::dropIfExists('psa_approval_goods');
    }
}
