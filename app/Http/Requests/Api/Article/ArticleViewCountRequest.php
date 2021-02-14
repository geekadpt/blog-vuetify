<?php

namespace App\Http\Requests\Api\Article;

class ArticleViewCountRequest extends FormRequest
{
    public function rules()
    {
        return [
            'id' => 'required|numeric|exists:articles,id',
        ];
    }
}
