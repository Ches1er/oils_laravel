<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->insert([
          ['name'=>'Valvoline', 'id_image'=>2],
          ['name'=>'Mobil', 'id_image'=>3]
        ]);
    }
}
