<?php

namespace App\Http\Requests\Api\Article;

class ArticleRequest extends FormRequest
{
    public function rules()
    {
        switch($this->method()) {
            case 'PUT':
                return [
                    'title' => 'required|string|max:100',
                    'body' => 'required|string',
                    'tags' => 'nullable|array',
                    'category' => 'required|string|max:20',
                    'excerpt' => 'string|max:200',
                    'target' => 'required|numeric'
                ];break;
        }
    }
    public function attributes()
    {
        return [
            'title' => '文章标题',
            'body' => '文章内容',
            'tags' => '文章标签',
            'category' => '文章分类',
            'excerpt' => '文章摘要',
            'target' => '发布形式',
        ];
    }
}
