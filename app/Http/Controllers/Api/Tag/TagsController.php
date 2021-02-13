<?php

namespace App\Http\Controllers\Api\Tag;

use App\Http\Requests\Api\Tag\TagArticlesRequest;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\TagResource;
use App\Models\Article;
use App\Models\ArticleMapTag;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    protected $perpage = 10;
    public function index()
    {
        return TagResource::collection(Tag::latest()->take(40)->get());
    }

    public function indexArticles(TagArticlesRequest $request)
    {
        $tag = Tag::find($request->tag);
        $articles = Article::whereIn('id', ArticleMapTag::where('tag_id',$tag->id)->pluck('article_id')->toArray())
            ->where('target','0')
            ->paginate($this->perpage);;
        return ArticleResource::collection($articles);
    }
}
