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
    public function actionAddApproval(Request $request) {
        $data = $request->only('definer','action','id','name');
        return json_encode($this->approvalService->addApproval($data));
    }
}
