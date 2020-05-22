<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTypesBrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_types_brands')->insert([
            ['id_brand'=>1, 'id_product_type'=>1],
            ['id_brand'=>1, 'id_product_type'=>2],
            ['id_brand'=>2, 'id_product_type'=>1]
        ]);
    }
}
