const Post = require("../models/postModel");
const mongoose = require("mongoose"); // Corrected the require statement
const { post } = require("../routes/postRoute");

const post_create = async (req, res) => {
    try {
        const post = new Post({
            image: req.file.filename,
            title: req.body.title,
            content: req.body.content
        });

        const postData = await post.save();
        res.status(200).send({ success: true, msg: "Data post", data: postData }); // Corrected the response data structure
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message }); // Corrected the error message
    }
};
//  gate method 
const getpost = async(req,res)=>{
try {
    const post = await Post.find({})
    res.status(200).send({ success: true, msg: "Data post", data: post });
} catch (error) {
    res.status(400).send({ success: false, msg: error.message });
}
}
// DELETE METHOD 
const postDelete = async(req,res)=>{
    try { 
        const id = req.params.id;
        await Post.deleteOne({_id:id});
        res.status(200).send({ success: true, msg: "Delete is succefully done" });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}
// UPDATE METHOD 
const  update_post  = async(req,res)=>{
    try {
        
        if (req.file !==undefined) {
            var id = req.body.id;
            var filename= req.file.filename;
            var title = req.body.title;
            var content = req.body.content;
        
           await Post.findByIdAndUpdate({_id:id},{$set:{image:filename,title:title,content:content}});
           res.status(200).json({ success: true, msg: "post update successfully!" });
        }
        else{
            
        if (req.file !==undefined) {
            var id = req.body.id;
            // var filename= req.file.filename;
            var title = req.body.title;
            var content = req.body.content;
            
            
           await Post.findByIdAndUpdate({_id:id},{$set:{title:title,content:content}});
           res.status(200).json({ success: true, msg: "post update successfully!" });
        }
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
}
module.exports = {
    post_create,
    getpost,
    postDelete,
    update_post 
}