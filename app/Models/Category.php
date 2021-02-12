<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'user_id','name', 'description',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function article()
    {
        return $this->hasMany(Article::class);
    }
}
