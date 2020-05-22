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
    public function getMb();
    public function getBmw();
    public function getFiat();
    public function getFord();
    public function getRen();
    public function getVw();
}
