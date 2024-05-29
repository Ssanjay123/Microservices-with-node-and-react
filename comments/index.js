const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require('axios')

app.use(cors());
app.use(bodyParser.json());
const commentBypostId = {};

app.get('/posts/:id/comments',(req,res)=>{
  res.send(commentBypostId[req.params.id] || [])
});

app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const { comment } = req.body;
    const comments = commentBypostId[req.params.id] || [];
    comments.push({id:commentId,comment,status:'pending'})
    commentBypostId[req.params.id]=comments
   console.log(commentBypostId);
     axios.post('http://localhost:4005/events',{
      type:"CommentCreated",
      data:{
        id:commentId,
        comment,
        postId:req.params.id,
        status:'pending'
      }
    });
     res.status(201).send(comments);
});

app.post('/events',async(req,res)=>{
  console.log('Event Recieved ',req.body.type);

  const {type,data} = req.body;

  if(type==='CommentModerated'){
    const {postId,id,status,comment} = data;
    const comments = commentBypostId[postId];

    const comment1 = comments.find(comment=>{
      return comment.id===id;
    });

    comment1.status = status;

    await axios.post('http://localhost:4005/events',{
      type:'CommentUpdated',
      data:{
        id,
        status,
        postId,
        comment
      }
    })

  }
  res.send({});
 });

app.listen(4001,()=>console.log('server is running on port 4001'));