<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FiatApprovalTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fiat_approval')->insert([
            ['name'=>'9.55535.D2'],
            ['name'=>'9.55535.G1'],
            ['name'=>'9.55535.G2'],
            ['name'=>'9.55535.H2'],
            ['name'=>'9.55535.H3'],
            ['name'=>'9.55535.S1'],
            ['name'=>'9.55535.S2'],
            ['name'=>'9.55535.M2'],
            ['name'=>'9.55535.N2'],
            ['name'=>'9.55535.Z2'],
        ]);
    }
}
