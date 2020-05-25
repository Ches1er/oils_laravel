<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiImages;
use App\Http\Controllers\Controller;

class ApiImagesController extends Controller
{
    protected $imagesService;

    /**
     * ApiImagesController constructor.
     * @param ServiceApiImages $imagesService
     */
    public function __construct(ServiceApiImages $imagesService)
    {
        $this->imagesService = $imagesService;
    }


    public function actionGetImages(){
        return json_encode($this->imagesService->getImages());
    }
}
