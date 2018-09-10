<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.index');
});


Route::get('index', 'IndexController@show')->name('index');
Route::get('become','BecomeController@show')->name('become');


//AUTH

Route::get('login', 'Auth\LoginController@show')->name('login'); //returns the view
