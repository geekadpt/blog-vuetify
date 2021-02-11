<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    protected $showSensitiveFields = false;

    public function toArray($request)
    {
        $data = parent::toArray($request);
        return $data;
    }
}
