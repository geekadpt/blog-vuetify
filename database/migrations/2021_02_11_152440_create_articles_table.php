<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class CreatearticlesTable extends Migration
{
    public function up()
    {
        Schema::create('articles', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->index();
            $table->text('body');
            $table->string('thumb')->default("https://unsplash.it/1600/900?random");
            $table->bigInteger('user_id')->unsigned()->index();
            $table->bigInteger('category_id')->unsigned()->index();
            $table->integer('reply_count')->unsigned()->default(0);
            $table->integer('view_count')->unsigned()->default(0);
            $table->integer('last_reply_user_id')->unsigned()->default(0);
            $table->integer('order')->unsigned()->default(0);
            $table->text('excerpt')->nullable();
            $table->string('slug')->nullable();
            $table->integer('target')->unsigned()->comment('0:发布且公开;1:保存草稿;2:发布且私有');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('articles');
    }
}
