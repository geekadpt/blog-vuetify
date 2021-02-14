<?php

namespace App\Http\Controllers\Api\Article;

use App\Http\Requests\Api\Article\ArticleRequest;
use App\Http\Requests\Api\Article\ArticleSearchRequest;
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
    public function searchIndex(ArticleSearchRequest $request)
    {
        // 创建一个查询构造器
        $builder = Article::query()->where('target', 0);
        // 判断是否有提交 search 参数，如果有就赋值给 $search 变量
        // search 参数用来模糊搜索商品
        if ($search = $request->search) {
            $like = '%'.$search.'%';
            // 模糊搜索商品标题、商品详情、SKU 标题、SKU描述
            $builder->where(function ($query) use ($like) {
                $query->where('title', 'like', $like)
                    ->orWhere('excerpt', 'like', $like);
            });
        }

        // 是否有提交 order 参数，如果有就赋值给 $order 变量
        // order 参数用来控制商品的排序规则
//        if ($order = $request->input('order', '')) {
//            // 是否是以 _asc 或者 _desc 结尾
//            if (preg_match('/^(.+)_(asc|desc)$/', $order, $m)) {
//                // 如果字符串的开头是这 3 个字符串之一，说明是一个合法的排序值
//                if (in_array($m[1], ['reply_count', 'view_count'])) {
//                    // 根据传入的排序值来构造排序参数
//                    $builder->orderBy($m[1], $m[2]);
//                }
//            }
//        }
        $order = '';
        $articles = $builder->withOrder($order)->paginate(10);

        return ArticleResource::collection($articles);
    }
}
