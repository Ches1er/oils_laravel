<?php

namespace App\Http\Controllers\Main;

use App\Contracts\ServiceApiArticles;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiArticlesController extends Controller
{
    protected $articlesService;

    public function __construct(ServiceApiArticles $articlesService)
    {
        $this->articlesService = $articlesService;
    }

    public function actionGetArticlesThemes(){
        return json_encode($this->articlesService->getThemes());
    }
    public function actionGetArticlesByTheme($themeid){
        return json_encode($this->articlesService->getArticlesByTheme($themeid));
    }
    public function actionGetArticle($articleid){
        return json_encode($this->articlesService->getArticle($articleid));
    }
    public function actionAddTheme(Request $request){
        $data = $request->only('id','name','id_image','action');
        return json_encode($this->articlesService->addTheme($data));
    }
    public function actionAddArticle(Request $request){
        $data = $request->only('id','name','id_image','short_desc','full_desc','goods','action','id_theme');
        return json_encode($this->articlesService->addArticle($data));
    }
}
