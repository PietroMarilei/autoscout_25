<?php

namespace Database\Seeders;

use App\Models\Photo;
use App\Models\Vehicle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class PhothosTableSeeder extends Seeder
{
    public function run(): void
    {
        /* $apiKey = '7da400951b89f57219e4e992de2d92142725a8b641d864d0f11395441514fc4d';
        $engine = 'google_images';
        $q = 'car';
        $ijn = '0';
        // create curl resource
        $ch = curl_init();
        // set url
        curl_setopt($ch, CURLOPT_URL, 'https://serpapi.com/search.json?api_key=7da400951b89f57219e4e992de2d92142725a8b641d864d0f11395441514fc4d&q=car&engine=google_images&ijn=0');
        //return the transfer as a string
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // $output contains the output string
        $output = curl_exec($ch);
        dd($output);  
        // close curl resource to free up system resources
        curl_close($ch); */

        Schema::withoutForeignKeyConstraints(function() {

            Photo::Truncate();
            for ($i=1; $i <= count(Vehicle::all()); $i++) {

                $vehiclePhotos = new Photo();
                $vehiclePhotos->vehicle_id = $i;
                $vehiclePhotos->img_path = 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/fiat-500-top-10.jpeg.jpg?itok=Z-u-Cr1B';
                $vehiclePhotos->save();
            }
        });
        
        
    }
}
