<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Goods_oils extends Model
{
    protected $table = 'goods_oils';
    protected $fillable = [
        'art',
        'name',
        'id_volume',
        'id_viscosity',
        'id_base',
        'id_brand',
        'id_image',
        'short_desc',
        'full_desc'
    ];

    public function Volume(){
        $volume = $this->hasOne(Volume::class,'id_goods','id')->get();
        return $volume;
    }
    public function Viscosity(){
        $viscosity = $this->hasOne(Viscosity::class, 'id_viscosity','id')->get();
        return $viscosity;
    }

    public function Acea():array {
        $acea_array = [];
        $collection = $this->hasManyThrough(Acea::class,
            Goods_acea::class,
            'id_goods', 'id', 'id', 'id_acea')->get();
        foreach ($collection as $acea) {
            $acea_array[]=$acea;
        }
        return $acea_array;
    }

    public function Api():array {
        $api_array = [];
        $collection = $this->hasManyThrough(Api::class,
            Goods_api::class,
            'id_goods', 'id', 'id', 'id_api')->get();
        foreach ($collection as $api) {
            $api_array[]=$api;
        }
        return $api_array;
    }

    public function MbApproval(): array {
        $approvals_array = [];
        $collection = $this->hasManyThrough(Mb_approval::class,
            Mb_approval_goods::class,
            'id_goods', 'id', 'id', 'id_approval')->get();
        foreach ($collection as $approval) {
            $approvals_array[]=$approval;
        }
        return $approvals_array;
    }
    public function BmwApproval(): array {
        $approvals_array = [];
        $collection = $this->hasManyThrough(Bmw_approval::class,
            Bmw_approval_goods::class,
            'id_goods', 'id', 'id', 'id_approval')->get();
        foreach ($collection as $approval) {
            $approvals_array[]=$approval;
        }
        return $approvals_array;
    }
    public function FiatApproval(): array {
        $approvals_array = [];
        $collection = $this->hasManyThrough(Fiat_approval::class,
            Fiat_approval_goods::class,
            'id_goods', 'id', 'id', 'id_approval')->get();
        foreach ($collection as $approval) {
            $approvals_array[]=$approval;
        }
        return $approvals_array;
    }
    public function FordApproval(): array {
        $approvals_array = [];
        $collection = $this->hasManyThrough(Ford_approval::class,
            Ford_approval_goods::class,
            'id_goods', 'id', 'id', 'id_approval')->get();
        foreach ($collection as $approval) {
            $approvals_array[]=$approval;
        }
        return $approvals_array;
    }
    public function RenApproval(): array {
        $approvals_array = [];
        $collection = $this->hasManyThrough(Ren_approval::class,
            Ren_approval_goods::class,
            'id_goods', 'id', 'id', 'id_approval')->get();
        foreach ($collection as $approval) {
            $approvals_array[]=$approval;
        }
        return $approvals_array;
    }
    public function VwApproval(): array {
        $approvals_array = [];
        $collection = $this->hasManyThrough(Vw_approval::class,
            Vw_approval_goods::class,
            'id_goods', 'id', 'id', 'id_approval')->get();
        foreach ($collection as $approval) {
            $approvals_array[]=$approval;
        }
        return $approvals_array;
    }
}
