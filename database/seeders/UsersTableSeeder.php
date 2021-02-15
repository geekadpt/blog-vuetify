<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // 生成数据集合
        User::factory()->count(10)->create();

        // 单独处理第一个用户的数据
        $user = User::find(1);
        $user->nickname = 'locyin';
        $user->email = 'locyin@163.com';
        $user->phone = '18404300662';
        $user->username = 'locyin';
        $user->avatar = 'https://blog-vuetify.oss-cn-beijing.aliyuncs.com/app/images/app/vmd.svg';
        $user->save();
    }
}
