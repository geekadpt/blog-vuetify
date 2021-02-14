<?php

namespace App\Http\Requests\Api\Article;

class ArticleSearchRequest extends FormRequest
{
    public function rules()
    {
        return [
            'search' => 'required|string|max:10',
        ];
    }
}
