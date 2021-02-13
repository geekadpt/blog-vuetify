<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'url' => config("app.url").'/tags/'.$this->id.'/articles',
            'color'=>$this->color,
            'num' => $this->num,
            'created_at'=> $this->created_at->format('Y-m-d')
        ];
    }
}
