<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 21.04.2020
 * Time: 14:38
 */

namespace App\Traits;


use App\Models\Image;

trait getObjWithImagesPath
{
    private function getWithImagePath($objects){
        if ($objects){
            foreach ($objects as $object){
                $img_path = Image::where('id',$object->id_image)->first();
                $object->img = $img_path->path;
            }
        }
        return $objects;
    }
}
