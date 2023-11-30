<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class users_table_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=0; $i < 10; $i++) { 
            $user = new User();
            // $user->id();
            $user->name = 'test';
            $user->last_name = 'last name';
            $user->email = fake()->unique()->email();
            $user->password = 'password';
            $user->address = '';
            $user->phone_number = '';

            $user->save();
        }
    }
}
