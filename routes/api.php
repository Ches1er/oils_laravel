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

// Products_types

Route::prefix('products_types')->group(function(){
    Route::get('/all', 'Main\ApiProductsTypesController@actionShowProductsTypes');
    Route::post('/add', 'Main\ApiProductsTypesController@actionAddProductType');
});

// Brand
Route::prefix('brands')->group(function (){
    Route::get('/all', 'Main\ApiBrandsController@actionShowBrands');
    Route::get('/bytype/{producttypeid}', 'Main\ApiBrandsController@actionShowBrandsByType');
    Route::post('/add', 'Main\ApiBrandsController@actionAddBrand');
});


// Acea

Route::get('acea/all/{definer}', 'Main\ApiMainPropertiesController@actionShowAcea');
Route::post('acea/add', 'Main\ApiMainPropertiesController@actionAddAcea');

// API

Route::get('api/all/{definer}', 'Main\ApiMainPropertiesController@actionShowApi');
Route::post('api/add', 'Main\ApiMainPropertiesController@actionAddApi');

// Base

Route::get('base/all', 'Main\ApiBaseController@actionShowBase');

// Viscosity

Route::get('viscosity/all/{definer}', 'Main\ApiMainPropertiesController@actionShowViscosity');
Route::post('viscosity/add', 'Main\ApiMainPropertiesController@actionAddViscosity');

// Volume

Route::get('volume/all/{definer}', 'Main\ApiMainPropertiesController@actionShowVolume');
Route::post('volume/add', 'Main\ApiMainPropertiesController@actionAddVolume');

//Goods

Route::prefix('goods')->group(function (){
    // Oils
    Route::get('/oils', 'Main\ApiGoodsController@actionGetGoodsOils');
    Route::post('/oilswprop', 'Main\ApiGoodsController@actionGetGoodsOilsWProp');
});

    // Approvals

// MB
Route::get('approvals/mb/all/{definer}', 'Main\ApiApprovalsController@actionGetMbApprovals');
// BMW
Route::get('approvals/bmw/all/{definer}', 'Main\ApiApprovalsController@actionGetBmwApprovals');
// Ford
Route::get('approvals/ford/all/{definer}', 'Main\ApiApprovalsController@actionGetFordApprovals');
// Fiat
Route::get('approvals/fiat/all/{definer}', 'Main\ApiApprovalsController@actionGetFiatApprovals');
// Ren
Route::get('approvals/ren/all/{definer}', 'Main\ApiApprovalsController@actionGetRenApprovals');
// VW
Route::get('approvals/vw/all/{definer}', 'Main\ApiApprovalsController@actionGetVwApprovals');
// Add-update
Route::post('approvals/add', 'Main\ApiApprovalsController@actionAddApproval');

    // Images
Route::prefix('images')->group(function (){
    Route::get('/all', 'Main\ApiImagesController@actionGetImages');
    Route::get('image/{name}','Main\ApiImagesController@actionGetImage');
    Route::post('/upload_image','Main\ApiImagesController@actionUploadImage');
});





