<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;



class UserProfileController extends Controller
{
    public function show(){
        return view('pages.userProfile');
        

        
    }
}