<?php

namespace Database\Seeders;

use App\Models\Category;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 生成数据集合
//        CategoryFactory::factory()->count(10)->create();
        for($i=1;$i<=10;$i++){
            $user = Category::create([
                'user_id' =>$i,
                'name' => "默认目录",
                'description' => "默认目录",
                'post_count' => 0,
            ]);

        }
    }
}
