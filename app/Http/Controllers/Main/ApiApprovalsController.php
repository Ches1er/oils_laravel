<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiApprovals;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiApprovalsController extends Controller
{
    protected $approvalService;

    /**
     * ApiApprovalsController constructor.
     * @param ServiceApiApprovals $approvalService
     */
    public function __construct(ServiceApiApprovals $approvalService)
    {
        $this->approvalService = $approvalService;
    }


    public function actionGetMbApprovals($definer){
         return json_encode($this->approvalService->getMb($definer));
    }
    public function actionGetBmwApprovals($definer){
        return json_encode($this->approvalService->getBmw($definer));
    }
    public function actionGetFordApprovals($definer){
        return json_encode($this->approvalService->getFord($definer));
    }
    public function actionGetFiatApprovals($definer){
        return json_encode($this->approvalService->getFiat($definer));
    }
    public function actionGetRenApprovals($definer){
        return json_encode($this->approvalService->getRen($definer));
    }
    public function actionGetVwApprovals($definer){
        return json_encode($this->approvalService->getVw($definer));
    }
    public function actionGetPorscheApprovals($definer){
        return json_encode($this->approvalService->getPorsche($definer));
    }
    public function actionGetGmApprovals($definer){
        return json_encode($this->approvalService->getGm($definer));
    }
    public function actionGetKoenigApprovals($definer){
        return json_encode($this->approvalService->getKoenig($definer));
    }
    public function actionGetChryslerApprovals($definer){
        return json_encode($this->approvalService->getChrysler($definer));
    }
    public function actionGetPsaApprovals($definer){
        return json_encode($this->approvalService->getPsa($definer));
    }
    public function actionGetVolvoApprovals($definer){
        return json_encode($this->approvalService->getVolvo($definer));
    }
    public function actionGetJaguarApprovals($definer){
        return json_encode($this->approvalService->getJaguar($definer));
    }
    public function actionGetJasoApprovals($definer){
        return json_encode($this->approvalService->getJaso($definer));
    }
    public function actionGetMazdaApprovals($definer){
        return json_encode($this->approvalService->getMazda($definer));
    }
    public function actionGetNissanApprovals($definer){
        return json_encode($this->approvalService->getNissan($definer));
    }

    public function actionAddApproval(Request $request) {
        $data = $request->only('definer','action','id','name');
        return json_encode($this->approvalService->addApproval($data));
    }
}
