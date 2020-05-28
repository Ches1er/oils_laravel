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
            ['name'=>'Моторные масла', 'id_image'=>1],
            ['name'=>'Трансмисионные масла', 'id_image'=>1],
            ['name' => 'Фильтры', 'id_image'=>1]
        ]);
    }
}
