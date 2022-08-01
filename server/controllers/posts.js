import mongoose from "mongoose";
import express from 'express';
import PostMessage from "../models/postMessgaes.js";

const router = express.Router();

export const getPosts  = async(req ,res)=>{

try {
    
  const postMessgaes =  await PostMessage.find();
  res.status(200).json(postMessgaes);


} catch (error) {

    res.status(404).json({message :error.message});
    
}


};
export const getPost = async (req, res) => { 
  const { id } = req.params;

  try {
      const post = await PostMessage.findById(id);
      
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createPosts = async(req,res) => {

    const post = req.body;

    const newPost  = new PostMessage(post);
    
    try{
      await newPost.save();
      res.status(200).json(newPost);
    } catch(error){
        res.status(404).json({message :error.message});
    
    }
    



};

export const updatePosts = async (req, res) => {
  const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
};

export const deletePosts = async(req,res) =>{

const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  await PostMessage.findByIdAndRemove(id);

  res.json({message : "POST DELETED SUCESSFULLY"});



}


export const likePosts = async(req,res) =>{

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
  
  res.json(updatedPost);
  
  
  
  }
  export default router;