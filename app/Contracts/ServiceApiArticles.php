<?php
/**
 * Created by PhpStorm.
 * User: Ivan
 * Date: 16.07.2020
 * Time: 11:39
 */

namespace App\Contracts;


interface ServiceApiArticles
{
    public function getThemes();
    public function getArticlesByTheme($id);
    public function getArticle($id);
    public function addTheme(array $data);
    public function addArticle(array $data);
}
