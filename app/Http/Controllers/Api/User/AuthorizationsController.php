<?php

namespace App\Http\Controllers\Api\User;

use Illuminate\Auth\AuthenticationException;
use App\Http\Requests\Api\User\AuthorizationRequest;

class AuthorizationsController extends Controller
{
    public function store(AuthorizationRequest $request)
    {
        $username = $request->username;

        if(is_mobile($username)){
            $credentials['phone'] = $username;
        }elseif (filter_var($username, FILTER_VALIDATE_EMAIL)){
            $credentials['email'] = $username;
        }else{
            $credentials['username'] = $username;
        }
        $credentials['password'] = $request->password;
        //dd($credentials);
        if (!$token = \Auth::guard('api')->attempt($credentials)) {
            throw new AuthenticationException('用户名或密码错误');
        }
        return response()->json([
            'username' => $username,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ])->setStatusCode(201);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
    public function update()
    {
        $token = auth('api')->refresh();
        return $this->respondWithToken($token);
    }

    public function destroy()
    {
        auth('api')->logout();
        return response(null, 204);
    }
}
