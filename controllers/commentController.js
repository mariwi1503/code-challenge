"use strict"

const Comment = require('../models/commentModel')

const commentController = {}

commentController.getComment = async (req, res) => {
    try {
        const comment = await Comment.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
commentController.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.json(comment);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 
commentController.saveComment = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        const savedComment = await article.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
commentController.updateComment = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedComment = await Comment.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
commentController.deleteComment = async (req, res) => {
    const cekId = await Comment.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedComment = await Comment.deleteOne({_id: req.params.id});
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = commentController