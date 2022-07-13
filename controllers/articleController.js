"use strict"

const Article = require('../models/articleModel')

const articleController = {}
 
articleController.getAricles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}
 
articleController.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        res.json(article);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
articleController.saveArticle = async (req, res) => {
    const article = new Article(req.body);
    try {
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message});
    }
}
 
articleController.updateArticle = async (req, res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedArticle = await Article.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
articleController.deleteArticle = async (req, res) => {
    const cekId = await Article.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedArticle = await Article.deleteOne({_id: req.params.id});
        res.status(200).json(deletedArticle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = articleController;
