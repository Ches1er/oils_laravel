<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 05.05.2020
 * Time: 15:55
 */

namespace App\Traits;


use App\Models\Goods_oils;

trait getObjWithAddProperties
{

    private function getOilsWithAddProperties($objects){
        if ($objects){
            foreach ($objects as &$object){
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
            }

        }
        return $objects;
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
}
