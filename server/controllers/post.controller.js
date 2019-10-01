const Post = require('../models/post')
const postCtrl = {};


postCtrl.getPosts = async (req,res) => {
   const posts = await Post.find();
   res.json(posts);
}
    

postCtrl.createPost  = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        img: req.body.img,
        idUser: req.body.idUser

    });
    await post.save()
    console.log(post);
    res.json({
        'status': 'Post register'
    });
    
}

postCtrl.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.json(post);
}

postCtrl.editPost = async (req,res) => {
    const {id} = req.params;
    const post = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        img: req.body.img,
        idUser: req.body.idUser


    };
    await Post.findByIdAndUpdate(id, {$set: post}, {new: true});
    res.json({status: 'Post Updated'});
    
}

postCtrl.deletePost = async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndRemove(id);
    res.json({status: 'Post delete'});
}

module.exports = postCtrl;