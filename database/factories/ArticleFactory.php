<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\ArticleMapTag;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition()
    {
        $user_id = $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        $category = Category::create([
            'user_id' => $user_id,
            'name' => $this->faker->state,
            'description' => $this->faker->sentence,
            'post_count' => 1,
        ]);
        return [
            'title' => $this->faker->sentence(),
            'thumb' => "",
            'body' => $this->faker->text($maxNbChars = 6000),
            'excerpt' => $this->faker->sentence(),
            'user_id' => $user_id,
            'category_id' => $category->id,
            'target' => 0
        ];
    }
    public function configure()
    {
        return $this->afterCreating(function (Article $article) {
            //
            for($i=0;$i<3;$i++){
                $tags[$i] = $this->faker->safeColorName;
            }
            foreach ($tags as $v) {
                if (Tag::where([['name', $v], ['user_id', $article->user_id]])->first() != null) {
                    $tag = Tag::where([
                        ['name',$v],
                        ['user_id', $article->user_id]
                    ])->first();
                    $tag->num = $tag->num + 1;
                } else {
                    $tag = new Tag();
                    $tag->user_id =  $article->user_id;
                    $tag->name = $v;
                    $tag->color = $v;
                    $tag->num = 1;
                }
                $tag->save();
                $article_map_tag = new ArticleMapTag();
                $article_map_tag->tag_id = $tag->id;
                $article_map_tag->article_id = $article->id;
                $article_map_tag->save();
            }
        });
    }
}
