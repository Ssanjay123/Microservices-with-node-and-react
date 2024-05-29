const express = require('express');
const app = express();
app.use(require('cors')());
app.use(express.json());
const posts = {};
app.get('/posts',(req,res)=>{
  res.send(posts);
});

app.post('/events',(req,res)=>{
 const {type,data} = req.body;

 if(type==="PostCreated"){
    const {id, title} = data;

posts[id] = {id, title, comments:[]}
 }

 if(type==="CommentCreated"){
    const {id, comment, postId, status} = data;

    const post = posts[postId];

    post.comments.push({id,comment,status});
 }

 if(type==="CommentUpdated"){
   const {id,postId,comment,status} = data;

   const post = posts[postId];
   const comment1 = post.comments.find(comment=>{
      return comment.id===id;
   })
   comment1.status = status;
   comment1.comment = comment;
 }
 console.log(posts);
 res.send({});
});

app.listen(4002,()=>console.log('server running on 4002'))
