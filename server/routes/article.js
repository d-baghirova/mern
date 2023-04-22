const {Router} = require('express');
const router = Router();
const Article = require('../models/Article');

router.get('/articles', async(req, res) => {
    const articles = await Article.find({}).lean();
    res.send(articles);
})
 
router.post('/create', async(req, res) => {
    //title: req.query.title,
        //article: req.query.article,
        //author: req.query.author
        
    const newArticle = new Article({
        category: req.body.category,
        articles: req.body.articles
    });

    await newArticle.save();
    res.send(newArticle);
})

module.exports = router;