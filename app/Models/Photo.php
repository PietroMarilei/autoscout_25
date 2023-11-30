<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Vehicle;

class Photo extends Model
{
    use HasFactory;
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
