<?php

use App\Http\Controllers\Api\Article\ArticlesController;
use App\Http\Controllers\Api\Category\CategoriesController;
use App\Http\Controllers\Api\ImagesController;
use App\Http\Controllers\Api\Tag\TagsController;
use App\Http\Controllers\Api\User\AuthorizationsController;
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
            // 用户登录
            Route::post('authorizations', [AuthorizationsController::class, 'store'])->name('authorizations.store');
            //获取所有文章
            Route::get('articles', [ArticlesController::class, 'index']) ->name('api.articles.index');
            //获取文章详情
            Route::post('articles', [ArticlesController::class, 'show']) ->name('api.articles.show');

            Route::get('tags', [TagsController::class, 'index'])
                ->name('tags.index');

            //获取所有文章
            Route::get('tags/articles', [TagsController::class, 'indexArticles']) ->name('api.tags.articles.index');
        });
        Route::middleware('throttle:' . config('api.rate_limits.sign'))
            ->middleware('token.refresh')
            ->group(function () {
                // 刷新token
                Route::put('authorizations/current', [AuthorizationsController::class, 'update'])->name('authorizations.update');
                // 删除token
                Route::delete('authorizations/current', [AuthorizationsController::class, 'destroy'])->name('authorizations.destroy');
                // 获取登录用户的信息
                Route::get('users', [UsersController::class, 'me']) ->name('users.me');
                //获取所有文章
                Route::put('articles', [ArticlesController::class, 'store']) ->name('api.articles.store');
                // 更新登录用户的信息
                Route::patch('users', [UsersController::class, 'update']) ->name('users.update');
                // 上传图片
                Route::post('images', [ImagesController::class, 'store'])
                    ->name('images.store');
                Route::get('categories', [CategoriesController::class, 'index'])
                    ->name('categories.index');
            });
    });
