<?php

namespace Database\Factories;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tag::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $colors = ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'];
        return [
            'user_id' =>$this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            'color' =>$this->faker->randomElement($colors),
            'name' => $this->faker->colorName,
            'num' => 0,
            'href' => config("app.APP_URL").'/'.$this->faker->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).'/articles',
        ];
    }
}
