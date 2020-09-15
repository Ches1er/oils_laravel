<?php
namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiMainProperties;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiMainPropertiesController extends Controller {
    protected $mainPropService;

    /**
     * ApiMainPropertiesController constructor.
     * @param ServiceApiMainProperties $mainPropService
     */
    public function __construct(ServiceApiMainProperties $mainPropService)
    {
        $this->mainPropService = $mainPropService;
    }

    public function actionShowAcea($definer){
        return json_encode($this->mainPropService->getAcea($definer));
    }
    public function actionShowIlsac($definer){
        return json_encode($this->mainPropService->getIlsac($definer));
    }

    public function actionShowApi($definer){
        return json_encode($this->mainPropService->getApi($definer));
    }
    public function actionShowViscosity($definer){
        return json_encode($this->mainPropService->getViscosity($definer));
    }
    public function actionShowVolume($definer){
        return json_encode($this->mainPropService->getVolume($definer));
    }
    public function actionAddVolume(Request $request){
        $data = $request->only('id','volume','action');
        return json_encode($this->mainPropService->addVolume($data));
    }
    public function actionAddViscosity(Request $request) {
        $data = $request->only('id','name','action');
        return json_encode($this->mainPropService->addViscosity($data));
    }
    public function actionAddAcea(Request $request) {
        $data = $request->only('id','name','action');
        return json_encode($this->mainPropService->addAcea($data));
    }
    public function actionAddApi(Request $request) {
        $data = $request->only('id','name','action');
        return json_encode($this->mainPropService->addApi($data));
    }
    public function actionAddIlsac(Request $request) {
        $data = $request->only('id','name','action');
        return json_encode($this->mainPropService->addIlsac($data));
    }

}
