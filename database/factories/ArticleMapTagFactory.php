<?php

namespace Database\Factories;

use App\Models\ArticleMapTag;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleMapTagFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ArticleMapTag::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' =>'',
            'color' =>'',
            'name' => '',
            'num' => 0,
            'href' => '',
        ];
    }
}
