<?php

namespace App\Http\Requests\Api\Tag;

class TagArticlesRequest extends FormRequest
{
    public function rules()
    {
        return [
            'tag' => 'required|numeric|exists:tags,id',
        ];
    }
}
