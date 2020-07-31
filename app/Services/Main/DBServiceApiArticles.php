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
use App\Models\Image;
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
        if ($themeid === 'all'){
            $articles = Article::all();
            return $this->getWithImagePath($articles);
        }
        $articles = Article::where('id_theme',$themeid)->get();
        return $this->getWithImagePath($articles);
    }

    public function getArticle($articleid)
    {
        $article = Article::where('id', $articleid)->get();
        return $this->getWithImagePath($article);
    }

    public function addTheme(array $data)
    {
        // If has no image
        if (!$data['id_image']){
            $default_image = Image::where('name','default')->first();
            $data['id_image'] = $default_image->id;
        }

        // If exists
        if (Articles_themes::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Articles_themes::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_image'=>(int)$data['id_image']
        ])) {
            if ($data['action']==='update'){
                return ['response'=>'update success'];
            };
            return ['response'=>'insert success'];
        };
        return ['response'=>'error'];
    }

    public function addArticle(array $data)
    {
        // If has no image
        if (!$data['id_image']){
            $default_image = Image::where('name','default')->first();
            $data['id_image'] = $default_image->id;
        }

        // If exists
        if (Article::where('name',$data['name'])
                ->first() && $data['action']==='add') return ['response'=>'this object exists'];

        // Create-update
        if (Article::updateOrCreate(['id'=> $data['id']],[
            'name'=>$data['name'],
            'id_image'=>(int)$data['id_image'],
            'short_desc' => $data['short_desc'],
            'full_desc' => $data['full_desc'],
            'goods' => $data['goods'],
            'id_theme'=>$data['id_theme']
        ])) {
            if ($data['action']==='update'){
                return ['response'=>'update success'];
            };
            return ['response'=>'insert success'];
        };
        return ['response'=>'error'];
    }
}
