<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 16.07.2020
 * Time: 11:43
 */

namespace App\Services\Main;


use App\Contracts\ServiceApiArticles;
use App\Models\Article;
use App\Models\Articles_themes;
use App\Traits\getObjWithImagesPath;

class DBServiceApiArticles implements ServiceApiArticles
{
    use getObjWithImagesPath;

    public function getThemes()
    {
        $themes = Articles_themes::all();
        return $this->getWithImagePath($themes);
    }

    public function getArticlesByTheme($themeid)
    {
        $theme = Articles_themes::where('id',$themeid)->get();
        return $this->getWithImagePath($theme);
    }

    public function getArticle($articleid)
    {
        $article = Article::where('id', $articleid)->get();
        return $this->getWithImagePath($article);
    }

    public function addTheme(array $data)
    {
        // TODO: Implement addTheme() method.
    }

    public function addArticle(array $data)
    {
        // TODO: Implement addArticle() method.
    }
}
