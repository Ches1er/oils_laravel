<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            ProductTypesTableSeeder::class,
            ImagesTableSeeder::class,
            BrandsTableSeeder::class,
            ProductTypesBrandsTableSeeder::class,
            RolesTableSeeder::class,
            UsersRolesTableSeeder::class,
            VolumeTableSeeder::class,
            AceaTableSeeder::class,
            ViscocityTableSeeder::class,
            ApiTableSeeder::class,
            BaseTableSeeder::class,
            GoodsOilsTableSeeder::class,
            GoodsApiTableSeeder::class,
            GoodsAceaTableSeeder::class,
            MbApprovalTableSeeder::class,
            BmwApprovalTableSeeder::class,
            FordApprovalTableSeeder::class,
            RenaultApprovalTableSeeder::class,
            VwApprovalTableSeeder::class,
            FiatApprovalTableSeeder::class,
            MbApprovalGoodsTableSeeder::class,
            BmwApprovalGoodsTableSeeder::class,
            FordApprovalGoodsTableSeeder::class,
            RenaultApprovalGoodsTableSeeder::class,
            VwApprovalGoodsTableSeeder::class,
            FiatApprovalGoodsTableSeeder::class
        ]);
    }
}
