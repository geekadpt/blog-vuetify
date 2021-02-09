<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Requests\Api\User\VerificationCodeRequest;
use Illuminate\Http\Request;

class VerificationCodesController extends Controller
{
    public function store(VerificationCodeRequest $request)
    {
        return response()->json(['test_message' => 'store verification code']);
    }
}
