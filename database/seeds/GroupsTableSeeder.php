<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->insert([
            ['name'=>'Моторные масла', 'id_img'=>1],
            ['name'=>'Трансмисионные масла', 'id_img'=>1]
        ]);
    }
}
