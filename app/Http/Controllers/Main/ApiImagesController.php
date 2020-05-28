<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiImages;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
    public function actionUploadImage(Request $request){
        $file = $request->file('file');
        $uploaddir = 'img';
        $file_name = $file -> getClientOriginalName();
        $destination_path = $uploaddir;
        if ($file->move($destination_path,$file_name)) {
            return json_encode($this->imagesService->addImage($destination_path, $file_name));
        }
        else return json_encode(['response' => 'error']);
    }
}
