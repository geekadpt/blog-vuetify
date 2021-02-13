<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Requests\Api\User\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function store(UserRequest $request)
    {
        $verifyData = \Cache::get($request->verification_key);

        if (!$verifyData) {
            abort(403, '验证码已失效');
        }

        if (!hash_equals($verifyData['code'], $request->verification_code)) {
            // 返回401
            throw new AuthenticationException('验证码错误');
        }

        $user = User::create([
            'username' => $request->username,
            'nickname' => $request->username,
            'phone' => $verifyData['phone'],
            'password' => bcrypt($request->password),
        ]);

        // 清除验证码缓存
        \Cache::forget($request->verification_key);

        return new UserResource($user);
    }
    public function me(Request $request)
    {
        return (new UserResource(Auth::guard('api')->user()))->showSensitiveFields();
    }

    public function update(UserRequest $request)
    {
        $user = Auth::guard('api')->user();
        $attributes = $request->only(['nickname', 'introduction']);

        if ($request->avatar) {
            $attributes['avatar'] = $request->avatar;
        }
        $user->update($attributes);

    }
}
