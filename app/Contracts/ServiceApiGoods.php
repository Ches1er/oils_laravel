<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.04.2020
 * Time: 15:29
 */

namespace App\Contracts;


interface ServiceApiGoods
{
    public function getGoodsOils();
    public function getGoodsOilsWProp(array $data);
    public function addGoodsOil(array $data);
}
