<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 03.08.2020
 * Time: 16:36
 */

namespace App\Traits;


use App\Models\To_groups;
use App\Models\To_price_exchange;
use Illuminate\Support\Facades\DB;

trait getToObjWithAddProperties
{
    private function getToObjWProp($objects, $exchange){
        if ($exchange)$objects = $this->getHrnPrice($objects);
        $objects = $this->getMaxMinMidPrices($objects);
        return $objects;
    }
      private function getHrnPrice($objects) {
          foreach ($objects as &$object){
              $id_exchange = $object->id_exchange;
              $exchange = To_price_exchange::where('id',$id_exchange)->first();
              $object->price = round($object->price*$exchange->exchange,2);
          }
          return $objects;
      }
      private function getMaxMinMidPrices($objects) {
          $groups = DB::table('to_groups')->select('id')->get();
          foreach ($groups as $group){
              if (count(DB::table('to_goods')->where('id_group',$group->id)->get()))
              {
                  $max_id = $this->getMax($group->id)->id;
                  $min_id = $this->getMin($group->id)->id;
              }
              foreach ($objects as &$object){
                  if ($object->id === $max_id){
                      $object->max = true;
                  }
                  if ($object->id === $min_id){
                      $object->min = true;
                  }
              }
          }
          return $objects;
      }
      private function getMax($id){
          $goods = DB::table('to_goods');
          $max = $goods->where('id_group',$id)->max('price');
          return $goods->where('price',$max)->first();
      }
      private function getMin($id){
        $goods = DB::table('to_goods');
        $min = $goods->where('id_group',$id)->min('price');
        return $goods->where('price',$min)->first();
    }
}
