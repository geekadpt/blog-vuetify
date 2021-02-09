<?php

namespace App\Http\Controllers\Api\User;

use Illuminate\Http\Request;

class VerificationCodesController extends Controller
{
    public function store()
    {
        return response()->json(['test_message' => 'store verification code']);
    }
}
