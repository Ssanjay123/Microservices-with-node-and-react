const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');
const axios = require('axios');

app.use(require('cors')());
app.use(bodyParser.json());

const posts = {};
app.get('/posts',(req,res)=>{
  res.send(posts)
});

app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id]={
        id,title
    };

    axios.post('http://localhost:4005/events',{
      type:"PostCreated",
      data:{
        id,title
      }
    });
    res.status(201).send(posts[id]);
});

app.post('/events',(req,res)=>{
 console.log('Event Recieved ',req.body.type);
 res.send({});
});


app.listen(4000,()=>console.log('server is running on port 4000'));