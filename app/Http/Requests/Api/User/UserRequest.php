<?php

namespace App\Http\Requests\Api\User;

class UserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'nickname' => 'required|string|max:20',
            'password' => 'required|alpha_dash|min:6',
            'verification_key' => 'required|string',
            'verification_code' => 'required|string',
        ];
    }

    public function attributes()
    {
        return [
            'nickname' => '昵称',
            'verification_key' => '短信验证码 key',
            'verification_code' => '短信验证码',
        ];
    }
}
