<?php

namespace App\Http\Controllers;

use App\Models\Pro;
use App\Models\PicturePro;
use Illuminate\Http\Request;
// use PhpParser\Node\Stmt\If_;

class ProController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        $pros=Pro::where('show' , 1)->get();
        $picturePro=PicturePro::where('show',1)->get();
        return response()
            ->json(['pros' => $pros,'picturePro' => $picturePro]);
    }
   
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
  
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pro  $pro
     * @return \Illuminate\Http\Response
     */
    public function show(Pro $pro)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pro  $pro
     * @return \Illuminate\Http\Response
     */
    public function edit(Pro $pro)
    {
        //
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pro  $pro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pro $pro)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pro  $pro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pro $pro)
    {
        //
    }
}
