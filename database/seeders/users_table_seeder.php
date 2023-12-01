<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class users_table_seeder extends Seeder
{

    public function run(): void
    {
        for ($i=0; $i < 10; $i++) { 
            $user = new User();
            $user->name = fake()->firstName();
            $user->last_name = fake()->lastName();
            $user->email = fake()->unique()->email();
            $user->password = 'password';
            $user->address = fake()->address();
            $user->phone_number = fake()->phoneNumber();

            $user->save();
        }
    }
}
