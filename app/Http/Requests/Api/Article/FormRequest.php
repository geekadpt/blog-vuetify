<?php

namespace App\Http\Requests\Api\Article;

use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;

class FormRequest extends BaseFormRequest
{
    public function authorize()
    {
        return true;
    }
}
