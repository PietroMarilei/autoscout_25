<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth ;
use Inertia\Inertia;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::id();
        $vehicles = Vehicle::join('photos','vehicles.id','=','photos.vehicle_id')->where('user_id','=',$user)->get();
        return Inertia::render("Vehicle/VehicleIndex", compact('vehicles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $vehicle = Vehicle::findOrFail($id);
        dd($vehicle);
        return Inertia::render("Vehicle/VehicleShow", compact('vehicle'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $vehicle = Vehicle::findOrFail($id);
        $vehicle->delete();
        return redirect()->route('Vehicles.index');
    }
}
