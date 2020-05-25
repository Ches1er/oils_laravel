<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 25.05.2020
 * Time: 15:44
 */

namespace App\Contracts;


interface ServiceApiImages
{
    public function getImages();
    public function getImage($name);
    public function addImage($destination_path, $file_name);
}
