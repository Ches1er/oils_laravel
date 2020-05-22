<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_types')->insert([
            ['name'=>'Моторные масла'],['name'=>'Трансмисионные масла'],['name' => 'Фильтры']
        ]);
    }
}
