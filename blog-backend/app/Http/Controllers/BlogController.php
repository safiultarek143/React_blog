<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    function addBlog(Request $request){
        $blog = new Blog;
        $blog->title = $request->input('title');
        $blog->description = $request->input('description');
        $blog->file_path = $request->file('file_path')->store('blogs');
        $blog->save();
        return $blog;
    }

    function bloglist() {
        return Blog::all();
    }

    function delete($id) {
        $result = Product::where('id', $id)->delete();
        if($result) {
            return ['result' => 'Blog has been deleted'];
        }
        else {
            return ['error' => 'Blog deleting failed'];
        }
    }

    function getBlog($id) {
        return Blog::find($id);
    }
    function showBlog($id) {
        return Blog::find($id);
    }

    function updateBlog(Request $request, $id) {
        $blog = Blog::find($id);
        $blog->title = $request->input('title');
        $blog->price = $request->input('meta_description');
        $blog->description = $request->input('description');
        $blog->image = $request->file('file_path');
        if ($request->file('file_path')) {
            $blog->file_path = $request->file('file_path')->store('blogs');
        }
        $blog->save();
        return $blog;

    }

    function searchBlog($key) {
        return Blog::where('title', 'LIKE', "%$key%")->get();
    }
}
