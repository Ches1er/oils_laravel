<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 03.08.2020
 * Time: 15:43
 */

namespace App\Contracts;


interface ServiceApiTo
{
    public function getAuto($id);
    public function getAutos();
    public function getBrands();
    public function getGoods($id_auto);
    public function getGroups();
}
