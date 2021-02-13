<?php

namespace App\Http\Controllers\Api;

use App\Handlers\ImageUploadHandler;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Http\Requests\Api\ImageRequest;


class ImagesController extends Controller
{
    public function store(ImageRequest $request, ImageUploadHandler $uploader)
    {
        $user = Auth::guard('api')->user();
        $prefix = !empty($user) ? $user-> id : 'mobile';
        $type = $request->type;

        $size = $type == 'avatar' ? 100 : null;
        $result = $uploader->save_to_aliyun($request->file, Str::plural($type), $prefix, $size);
        if($result){
            return response()->json([
                'src' => $result['path']
            ]);
        }else{
            abort(403,'不支持的图片格式');
        }
    }

}
