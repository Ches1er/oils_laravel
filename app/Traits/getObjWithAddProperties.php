<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 05.05.2020
 * Time: 15:55
 */

namespace App\Traits;


use App\Models\Brand;
use App\Models\Goods_oils;

trait getObjWithAddProperties
{
    private $approvalsArray = ['mb','bmw','fiat',
        'ford','ren','vw','porsche','gm','koenig',
        'chrysler','psa','volvo','jaguar','jaso',
        'mazda','nissan'];

    private function getOilsWithAddProperties($objects){
        if ($objects){
            foreach ($objects as &$object){
                $object->table_definer = 'goods_oils';
                // Brand_name
                $object = $this->addBrandName($object);
                // Acea
                $object = $this->addAceaStr($object);
                // Api
                $object = $this->addApiStr($object);
                // Approvals
                    //Mb
                $object = $this->addMbStr($object);
                    //BMW
                $object = $this->addBmwStr($object);
                    //Ren
                $object = $this->addRenStr($object);
                    //Fiat
                $object = $this->addFiatStr($object);
                    //Ford
                $object = $this->addFordStr($object);
                    //Vw
                $object = $this->addVwStr($object);
                    //Porsche
                $object = $this->addPorscheStr($object);
                    //GM
                $object = $this->addGmStr($object);
                    //Koenig
                $object = $this->addKoenigStr($object);
                    //Chrysler
                $object = $this->addChryslerStr($object);
                    //Psa
                $object = $this->addPsaStr($object);
                    //Volvo
                $object = $this->addVolvoStr($object);
                    //Jaguar
                $object = $this->addJaguarStr($object);
                    //Jaso
                $object = $this->addJasoStr($object);
                    //Mazda
                $object = $this->addMazdaStr($object);
                    //Nissan
                $object = $this->addNissanStr($object);
            }

        }
        return $objects;
    }
    // Brand_name
    private function addBrandName($object) {
        $brand = Brand::where('id', $object->id_brand)->first();
        $object->brand_name = $brand->name;
        return $object;
    }
    // MB
    private function addMbStr($object){
        /** @var Goods_oils $object */
        $array = $object->MbApproval();
        if (count($array)===0) {
            $object->mbApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->mbApproval = $str;
            return $object;
        }
    }
    // BMW
    private function addBmwStr($object){
        /** @var Goods_oils $object */
        $array = $object->BmwApproval();
        if (count($array)===0) {
            $object->bmwApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->bmwApproval = $str;
            return $object;
        }
    }
    private function addRenStr($object){
        /** @var Goods_oils $object */
        $array = $object->RenApproval();
        if (count($array)===0) {
            $object->renApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->renApproval = $str;
            return $object;
        }
    }
    private function addFiatStr($object){
        /** @var Goods_oils $object */
        $array = $object->FiatApproval();
        if (count($array)===0) {
            $object->fiatApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->fiatApproval = $str;
            return $object;
        }
    }
    private function addFordStr($object){
        /** @var Goods_oils $object */
        $array = $object->FordApproval();
        if (count($array)===0) {
            $object->fordApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->fordApproval = $str;
            return $object;
        }
    }
    private function addVwStr($object){
        /** @var Goods_oils $object */
        $array = $object->VwApproval();
        if (count($array)===0) {
            $object->vwApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->vwApproval = $str;
            return $object;
        }
    }
    private function addPorscheStr($object){
        /** @var Goods_oils $object */
        $array = $object->PorscheApproval();
        if (count($array)===0) {
            $object->porscheApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->porscheApproval = $str;
            return $object;
        }
    }
    private function addGmStr($object){
        /** @var Goods_oils $object */
        $array = $object->GmApproval();
        if (count($array)===0) {
            $object->gmApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->gmApproval = $str;
            return $object;
        }
    }
    private function addKoenigStr($object){
        /** @var Goods_oils $object */
        $array = $object->KoenigApproval();
        if (count($array)===0) {
            $object->koenigApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->koenigApproval = $str;
            return $object;
        }
    }
    private function addChryslerStr($object){
        /** @var Goods_oils $object */
        $array = $object->ChryslerApproval();
        if (count($array)===0) {
            $object->chryslerApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->chryslerApproval = $str;
            return $object;
        }
    }
    private function addPsaStr($object){
        /** @var Goods_oils $object */
        $array = $object->PsaApproval();
        if (count($array)===0) {
            $object->psaApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->psaApproval = $str;
            return $object;
        }
    }
    private function addVolvoStr($object){
        /** @var Goods_oils $object */
        $array = $object->VolvoApproval();
        if (count($array)===0) {
            $object->volvoApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->volvoApproval = $str;
            return $object;
        }
    }
    private function addJaguarStr($object){
        /** @var Goods_oils $object */
        $array = $object->JaguarApproval();
        if (count($array)===0) {
            $object->jaguarApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->jaguarApproval = $str;
            return $object;
        }
    }
    private function addJasoStr($object){
        /** @var Goods_oils $object */
        $array = $object->JasoApproval();
        if (count($array)===0) {
            $object->jasoApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->jasoApproval = $str;
            return $object;
        }
    }
    private function addMazdaStr($object){
        /** @var Goods_oils $object */
        $array = $object->MazdaApproval();
        if (count($array)===0) {
            $object->mazdaApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->mazdaApproval = $str;
            return $object;
        }
    }
    private function addNissanStr($object){
        /** @var Goods_oils $object */
        $array = $object->NissanApproval();
        if (count($array)===0) {
            $object->nissanApproval = null;
            return $object;
        }
        else {
            $array_id = array_map(function($e){
                return $e->id;
            },$array);
            $str = implode(',',$array_id);
            $object->nissanApproval = $str;
            return $object;
        }
    }

    private function addAceaStr($object){
        /** @var Goods_oils $object */
            $acea_array = $object->Acea();
            $acea_id_array = array_map(function($e){
                return $e->id;
            }, $acea_array);
            $acea_str = implode(',',$acea_id_array);
            $object->acea = $acea_str;
        return $object;
    }

    private function addApiStr($object){
        /** @var Goods_oils $object */
            $api_array = $object->Api();
            $api_id_array = array_map(function($e){
                return $e->id;
            }, $api_array);
            $api_str = implode(',',$api_id_array);
            $object->api = $api_str;
        return $object;
    }

    public function addTypesToTheBrands($objects){
        foreach ($objects as &$object){
            $types = $object->types();
            $types_id = [];
            $types_names = [];
            foreach ($types as $type){
                $types_id[]=$type->id;
                $types_names[]=$type->name;
            }
            $object->types = implode(',',$types_id);
            $object->types_names = implode(',',$types_names);
        }
        return $objects;
    }
    public function addTableDefiner($objects, $definer){
        foreach ($objects as &$object){
            $object->table_definer = $definer;
        }
        return $objects;
    }
}
