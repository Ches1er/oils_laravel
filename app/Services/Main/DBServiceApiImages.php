<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 25.05.2020
 * Time: 15:53
 */

namespace App\Services\Main;


use App\configs\uploadUrlConfig;
use App\Contracts\ServiceApiImages;
use App\Models\Image;

class DBServiceApiImages implements ServiceApiImages
{
    private $uploadUrlConfig;

    /**
     * DBServiceApiImages constructor.
     */
    public function __construct()
    {
        $this->uploadUrlConfig = new uploadUrlConfig();
    }

    public function getImages()
    {
        return Image::orderBy('id','DESC')->get();
    }

    public function getImage($name)
    {
        return Image::where('name',$name)->first();
    }

    public function addImage($destination_path, $file_name)
    {
        // TODO: Implement addImage() method.
    }
}
