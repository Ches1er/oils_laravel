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
    public function getPorsche($definer);
    public function getGm($definer);
    public function getKoenig($definer);
    public function getChrysler($definer);
    public function getPsa($definer);
    public function getVolvo($definer);
    public function getJaguar($definer);
    public function getJaso($definer);
    public function getMazda($definer);
    public function getNissan($definer);
    public function addApproval(array $data);
}
