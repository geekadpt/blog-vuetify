<?php

namespace App\Http\Controllers\Api\Article;

use App\Http\Requests\Api\Article\ArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Article;

use App\Models\Category;
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
    public function store(ArticleRequest $request)
    {
        $user = $request->user();
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
//        if($article->target == 0) {
//            //发布归档
//            $archieve = new Archive();
//            $archieve->user_id = $this->user()->id;
//            $archieve->article_id = $article->id;
//            $archieve->title = $article->title;
//            $archieve->save();
//            //发布标签和标签文章对照表
//            if ($request->tags) {
//                foreach ($request->tags as $v) {
//                    if(strlen($v) > $this->tagMaxLength){
//                        continue;
//                    }
//                    if (Tag::where([['name', $v], ['user_id', $this->user()->id]])->first() != null) {
//                        $tag = Tag::where([
//                            ['name', $v],
//                            ['user_id', $this->user()->id]
//                        ])->first();
//                        $tag->num = $tag->num + 1;
//                    } else {
//                        $tag = new Tag();
//                        $tag->user_id = $this->user()->id;
//                        $tag->name = $v;
//                        $tag->num = 1;
//                    }
//                    $tag->save();
//                    $article_map_tag = new ArticleMapTag();
//                    $article_map_tag->tag_id = $tag->id;
//                    $article_map_tag->article_id = $article->id;
//                    $article_map_tag->save();
//                }
//            }
//        }
        return response()->json(['message' => '发布成功'], 201);
    }
}
