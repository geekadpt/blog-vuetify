<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Requests\Api\Category\CategoryArticlesRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    protected $perpage = 10;
    public function index(Request $request)
    {
        $categories = $request->user()->category;
        return CategoryResource::collection($categories);
    }
    public function indexArticles(CategoryArticlesRequest $request)
    {
        $category = Category::find($request->category);
        $articles = $category->article()
            ->where('target','0')
            ->paginate($this->perpage);
        return ArticleResource::collection($articles);
    }
}
