<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.04.2020
 * Time: 11:09
 */

namespace App\Contracts;


interface ServiceApiBrands
{
    public function getBrands();
    public function getBrandsByProductType(int $producttypeid);
    public function addBrand(array $data);
}
