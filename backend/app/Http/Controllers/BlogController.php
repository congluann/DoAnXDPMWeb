<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Str;



class BlogController extends Controller
{
    public function index()
    {
        return response()->json(Blog::latest()->get());
    }

    public function show($id)
    {
        return response()->json(Blog::findOrFail($id));
    }
public function store(Request $request)
{
    $data = $request->validate([
        'title' => 'required',
        'content' => 'required',
        'description' => 'nullable',
        'image' => 'nullable|image',
        'author' => 'nullable',
        'category' => 'nullable'
    ]);

    $data['slug'] = Str::slug($data['title']);

    if ($request->hasFile('image')) {
        $data['image'] = $request->file('image')->store('blogs', 'public');
    }

    return response()->json(Blog::create($data));
}

   public function update(Request $request, $id)
{
    $blog = Blog::findOrFail($id);

    $data = $request->validate([
        'title' => 'required',
        'content' => 'required',
        'description' => 'nullable',
        'image' => 'nullable|image',
        'author' => 'nullable',
        'category' => 'nullable'
    ]);

    $data['slug'] = Str::slug($data['title']);

    if ($request->hasFile('image')) {
        $data['image'] = $request->file('image')->store('blogs', 'public');
    }

    $blog->update($data);

    return response()->json($blog);
}

    public function destroy($id)
    {
        Blog::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}