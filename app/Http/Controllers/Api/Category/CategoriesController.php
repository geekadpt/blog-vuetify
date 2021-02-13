<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index(Request $request)
    {
        $categories = $request->user()->category;
        return CategoryResource::collection($categories);
    }
}
