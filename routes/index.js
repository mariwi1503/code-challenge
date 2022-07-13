"use strict"
 
const articleController = require('../controllers/articleController')
    , commentController = require('../controllers/commentController')
    , router = require('express').Router();
 
// article route
router.get('/article', articleController.getAricles);
router.get('/article/:id', articleController.getArticleById);
router.post('/article', articleController.saveArticle);
router.patch('/article/:id', articleController.updateArticle);
router.delete('/article/:id', articleController.deleteArticle);

// comment route

router.get('/comment', commentController.getComment);
router.get('/comment/:id', commentController.getCommentById);
router.post('/comment', commentController.saveComment);
router.patch('/comment/:id', commentController.updateComment);
router.delete('/comment/:id', commentController.deleteComment);
 
module.exports = router;