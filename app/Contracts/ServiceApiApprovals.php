<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 14.05.2020
 * Time: 16:13
 */

namespace App\Contracts;


interface ServiceApiApprovals
{
    public function getMb($definer);
    public function getBmw($definer);
    public function getFiat($definer);
    public function getFord($definer);
    public function getRen($definer);
    public function getVw($definer);
    public function addApproval(array $data);
}
