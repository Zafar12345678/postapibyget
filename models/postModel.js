const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: { 
   type: String, 
   required: true 
},
  title: { 
    type: String, 
    required: true 
},
  content: { 
    type: String,
     required: true 
    },

});

const Post = mongoose.model("Zafar", postSchema);

module.exports = Post;
