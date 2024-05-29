const express = require('express');

const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/events',async (req,res)=>{
 const {type,data} = req.body;
console.log(data);
 if(type === 'CommentCreated'){
    const status = data.comment.includes('orange')?'rejected':'approved';

    await axios.post('http://localhost:4005/events',{
        type:'CommentModerated',
        data:{
           id:data.id,
           postId:data.postId,
           status,
           comment:data.comment
        }
    })
 }
})


app.listen(4003,()=>console.log('server running on 4003'))