<?php

namespace App\Contracts;

interface ServiceApiMainProperties {
    public function getAcea($definer);
    public function getApi($definer);
    public function getViscosity($definer);
    public function getVolume($definer);
    public function addVolume(array $data);
    public function addViscosity(array $data);
    public function addAcea(array $data);
    public function addApi(array $data);
}
