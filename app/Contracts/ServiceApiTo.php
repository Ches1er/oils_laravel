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
    public function getAutos($id);
    public function getBrands();
    public function getModels($id_brand);
    public function getGoods($id_auto, $exchange=null);
    public function getGroups();
    public function getExchanges();

    public function addExchange(array $data);
    public function addModel(array $data);
    public function addTo(array $data);

}
