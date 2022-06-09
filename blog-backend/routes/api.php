<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/addproduct', [ProductController::class, 'addProduct']);
Route::get('/productlist', [ProductController::class, 'productlist']);
Route::delete('/productdelete/{id}', [ProductController::class, 'delete']);
Route::get('/product/{id}', [ProductController::class, 'getProduct']);
Route::put('/updateproduct/{id}', [ProductController::class, 'updateProduct']);
Route::get('/search-product/{key}', [ProductController::class, 'searchProduct']);
Route::post('/addblog', [BlogController::class, 'addBlog']);
Route::get('/bloglist', [BlogController::class, 'bloglist']);
Route::delete('/blogdelete/{id}', [BlogController::class, 'delete']);
Route::get('/blog/{id}', [BlogController::class, 'getBlog']);
Route::get('/blog/{id}', [BlogController::class, 'showBlog']);
Route::put('/updateblog/{id}', [BlogController::class, 'updateBlog']);
Route::get('/search-blog/{key}', [BlogController::class, 'searchBlog']);
Route::get('/user-profile/{id}', [UserController::class, 'profile']);
