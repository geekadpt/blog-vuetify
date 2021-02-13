<?php

namespace App\Http\Controllers\Api\Tag;

use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    public function index()
    {
        return TagResource::collection(Tag::latest()->take(40)->get());
    }
}
