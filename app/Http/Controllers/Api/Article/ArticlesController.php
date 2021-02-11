<?php

namespace App\Http\Controllers\Api\Article;

use App\Http\Requests\Api\Article\ArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index(Request $request)
    {
        $order = '';
        $perpage = '10';
        $articles = Article::where('target','0')->withOrder($order)->paginate($perpage);
        return ArticleResource::collection($articles);
    }
}
