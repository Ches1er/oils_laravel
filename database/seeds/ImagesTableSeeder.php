<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImagesTableSeeder extends Seeder
{
    private $path;

    /**
     * ImagesTableSeeder constructor.
     * @param $path
     */
    public function __construct()
    {
        $this->path = new \App\AppCustomConfigs\UploadUrlConfig();
    }


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('images')->insert([
          ['name'=>'default', 'path'=>$this->path::UPLOAD_ROOT_URL.'img/default.jpg'],
            ['name'=>'valvoline_main', 'path'=>$this->path::UPLOAD_ROOT_URL.'img/valvoline_main.jpg'],
            ['name'=>'mobil_main', 'path'=>$this->path::UPLOAD_ROOT_URL.'img/mobil_main.png'],
        ]);
    }
}
