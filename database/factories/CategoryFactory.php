<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $sentence = $this->faker->sentence();

        return [
            'user_id' =>$this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            'name' => $sentence,
            'description' => $sentence,
            'post_count' => 0,
        ];
    }
}
