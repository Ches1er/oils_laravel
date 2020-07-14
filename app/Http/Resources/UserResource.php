<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'api_token' => $this->api_token,
            'remember_token' => $this->remember_token,
            'phones' => $this->phones,
            'confirmed_client' => $this->confirmed_client,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
