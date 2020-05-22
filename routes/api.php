<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* To prevent CORS issue
1. In Middleware create origin.php class 2. In Kernel.php add this class to api array */

// Set OPTIONS to preflight response, for avoiding CORS issue
Route::options('{all}', function () {
    $response = Response::make('');

    if(!empty($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], ['http://localhost:8090'])) {
        $response->header('Access-Control-Allow-Origin', $_SERVER['HTTP_ORIGIN']);
    } else {
        $response->header('Access-Control-Allow-Origin', url()->current());
    }
    $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
    $response->header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    $response->header('Access-Control-Allow-Credentials', 'true');
    $response->header('X-Content-Type-Options', 'nosniff');
    return $response;
})->where('all','.*');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Brand
Route::get('brands/all', 'Main\ApiBrandsController@actionShowBrands');
Route::get('brands/bytype/{producttypeid}', 'Main\ApiBrandsController@actionShowBrandsByType');

// Acea

Route::get('acea/all', 'Main\ApiMainPropertiesController@actionShowAcea');

// API

Route::get('api/all', 'Main\ApiMainPropertiesController@actionShowApi');

// Base

Route::get('base/all', 'Main\ApiBaseController@actionShowBase');

// Viscosity

Route::get('viscosity/all', 'Main\ApiMainPropertiesController@actionShowViscosity');

// Volume

Route::get('volume/all', 'Main\ApiMainPropertiesController@actionShowVolume');

//Goods

Route::prefix('goods')->group(function (){
    // Oils
    Route::get('/oils', 'Main\ApiGoodsController@actionGetGoodsOils');
    Route::post('/oilswprop', 'Main\ApiGoodsController@actionGetGoodsOilsWProp');
});

    // Approvals

// MB
Route::get('approvals/mb/all', 'Main\ApiApprovalsController@actionGetMbApprovals');
// BMW
Route::get('approvals/bmw/all', 'Main\ApiApprovalsController@actionGetBmwApprovals');
// Ford
Route::get('approvals/ford/all', 'Main\ApiApprovalsController@actionGetFordApprovals');
// Fiat
Route::get('approvals/fiat/all', 'Main\ApiApprovalsController@actionGetFiatApprovals');
// Ren
Route::get('approvals/ren/all', 'Main\ApiApprovalsController@actionGetRenApprovals');
// VW
Route::get('approvals/vw/all', 'Main\ApiApprovalsController@actionGetVwApprovals');


