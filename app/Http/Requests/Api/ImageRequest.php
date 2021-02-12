<?php

namespace App\Http\Requests\Api;

class ImageRequest extends FormRequest
{
    public function rules()
    {

        $rules = [
            'type' => 'string|in:avatar,article',
        ];

        if ($this->type == 'avatar') {
            $rules['file'] = 'required|mimes:jpeg,jpg,bmp,png|dimensions:min_width=200,min_height=200';
        } else {
            $rules['file'] = 'required|mimes:jpeg,bmp,png,gif';
        }

        return $rules;
    }
    public function attributes()
    {
        return [
            'file' => '文件',
        ];
    }
    public function messages()
    {
        return [
            'file.dimensions' => '图片的清晰度不够，宽和高需要 200px 以上',
        ];
    }
}
