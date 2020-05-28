<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 26.05.2020
 * Time: 13:07
 */

namespace App\Contracts;


interface ServiceApiProductsTypes
{
    public function getProductsTypes();
    public function addProductType(array $data);
}
