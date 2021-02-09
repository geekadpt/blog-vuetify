<?php

use App\Http\Controllers\Api\User\CaptchasController;
use App\Http\Controllers\Api\User\UsersController;
use App\Http\Controllers\Api\User\VerificationCodesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')
    //命名空间
    ->namespace('Api')
    //别名
    ->name('api.v1.')
    //中间件
    //->middleware('change-locale')
    ->group(function() {
        Route::middleware('throttle:' . config('api.rate_limits.access'))->group(function () {
            Route::get('version', function () {
                return 'this is version v1';
            })->name('version');
            // 短信验证码
            Route::post('verificationCodes', [VerificationCodesController::class, 'store']) ->name('verificationCodes.store');
            // 图片验证码
            Route::post('captchas', [CaptchasController::class, 'store'])->name('captchas.store');
            // 用户注册
            Route::put('users', [UsersController::class, 'store']) ->name('users.store');
        });
        Route::middleware('throttle:' . config('api.rate_limits.sign'))
            ->middleware('token.refresh')
            ->group(function () {

            });
    });
