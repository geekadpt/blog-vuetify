<?php

namespace App\Http\Requests\Api\Category;

class CategoryArticlesRequest extends FormRequest
{
    public function rules()
    {
        return [
            'category' => 'required|numeric|exists:categories,id',
        ];
    }
}
