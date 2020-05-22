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


    public function actionGetMbApprovals(){
         return json_encode($this->approvalService->getMb());
    }
    public function actionGetBmwApprovals(){
        return json_encode($this->approvalService->getBmw());
    }
    public function actionGetFordApprovals(){
        return json_encode($this->approvalService->getFord());
    }
    public function actionGetFiatApprovals(){
        return json_encode($this->approvalService->getFiat());
    }
    public function actionGetRenApprovals(){
        return json_encode($this->approvalService->getRen());
    }
    public function actionGetVwApprovals(){
        return json_encode($this->approvalService->getVw());
    }
}
