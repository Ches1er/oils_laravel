<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.01.2021
 * Time: 10:35
 */

namespace App\Traits;


use App\Models\Image;

trait getOneObjWithImagePath
{
    private function getOneObjWithImagePath($obj){
        if ($obj){
                $img_path = Image::where('id',$obj->id_image)->first();
                $obj->img = $img_path->path;

        }
        return $obj;
    }
}
