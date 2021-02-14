<?php

namespace App\Http\Controllers\Api\Article;

use App\Http\Requests\Api\Article\ArticleRequest;
use App\Http\Requests\Api\Article\ArticleViewCountRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Archive;
use App\Models\Article;

use App\Models\ArticleMapTag;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArticlesController extends Controller
{
    protected $perpage = 10;
    protected $tagMaxLength = 10;

    public function index(Request $request)
    {
        $order = '';
        $articles = Article::where('target','0')->withOrder($order)->paginate($this->perpage);
        return ArticleResource::collection($articles);
    }
    public function store(ArticleRequest $request)
    {
        $user = Auth::guard('api')->user();
        //检测是否是新的文章分类
        $category_name = $request->category;
        if(Category::where('name',$category_name)->exists()){
            $category = Category::where('name',$category_name)->first();
            $category->post_count++;
            $category->save();
        }else{
            $category = Category::create([
                'user_id' =>$user->id,
                'name' => $category_name,
                'description' => $category_name,
                'post_count' => 1,
            ]);
        }
        $article = new Article;
        $article->fill($request->all());
        $article-> user_id = $user->id;
        $article->category_id = $category->id;
        $article-> save();
        if($article->target == 0) {
            //发布归档
            $archieve = new Archive();
            $archieve->user_id = $user->id;
            $archieve->article_id = $article->id;
            $archieve->title = $article->title;
            $archieve->save();
            //发布标签和标签文章对照表
            if ($request->tags) {
                foreach ($request->tags as $v) {
                    if(strlen($v['text']) > $this->tagMaxLength){
                        continue;
                    }
                    if (Tag::where([['name', $v['text']], ['user_id', $user->id]])->first() != null) {
                        $tag = Tag::where([
                            ['name',$v['text']],
                            ['user_id', $user->id]
                        ])->first();
                        $tag->num = $tag->num + 1;
                    } else {
                        $tag = new Tag();
                        $tag->user_id = $user->id;
                        $tag->name = $v['text'];
                        $tag->color = $v['color'];
                        $tag->num = 1;
                    }
                    $tag->save();
                    $article_map_tag = new ArticleMapTag();
                    $article_map_tag->tag_id = $tag->id;
                    $article_map_tag->article_id = $article->id;
                    $article_map_tag->save();
                }
            }
        }
        return response()->json(['message' => '发布成功'], 201);
    }
    public function show(ArticleRequest $request)
    {
        return new ArticleResource(Article::find($request->id));
    }

    public function updateViewCount(ArticleViewCountRequest $request)
    {
        $article = Article::find($request->id);
        $article->view_count++;
        $article->save();
    }
}
