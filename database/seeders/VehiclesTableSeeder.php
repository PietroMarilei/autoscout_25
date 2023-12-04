<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \Faker\Factory;
use Illuminate\Support\Facades\Schema;

class VehiclesTableSeeder extends Seeder
{
    public function run(): void
    {
        Schema::withoutForeignKeyConstraints(function () {
            Vehicle::truncate();
            $faker = (new \Faker\Factory())::create();
            $faker->addProvider(new \Faker\Provider\Fakecar($faker));

            for ($i = 1; $i <= 10; $i++) {
                $vehicle = new Vehicle();
                $vehicle->user_id = $i;
                $vehicle->title = $faker->vehicle;
                $vehicle->year = fake()->date();
                $vehicle->description = fake()->sentence(20);
                $vehicle->price = fake()->randomNumber(5, true);

                $vehicle->save();
            }
        });
    }
}
