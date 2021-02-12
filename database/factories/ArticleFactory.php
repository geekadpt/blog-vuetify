<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition()
    {
        $sentence = $this->faker->sentence();
        $category = User::find($this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))->category->first();
        $category->post_count++;
        $category ->save();
        return [
            'title' => $sentence,
            'thumb' => "http://www.dmoe.cc/random.php?".rand(1,600),
            'body' => $this->faker->text(),
            'excerpt' => $sentence,
            'user_id' => $this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            'category_id' => $category->id,
            'target' => 0
        ];


    }
}
