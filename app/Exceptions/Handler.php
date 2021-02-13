<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request,Throwable $exception)
    {
        if ($this->isHttpException($exception)) {
//            if (view()->exists('errors.' . $exception->getStatusCode())) {
//                API服务器不需要返回视图
//                return response()->view('errors.' . $exception->getStatusCode(), [], $exception->getStatusCode());
//            }
            //404已交给Vue处理,这里返回视图即可;
            if($exception->getStatusCode()==404 && $request->method()=='GET'){
                if(request()->segment(1) !== 'api')
                    return response()->view('app');
            }
        }
        return parent::render($request, $exception);
    }
}
