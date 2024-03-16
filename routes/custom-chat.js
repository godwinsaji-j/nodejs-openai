var express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const OpenAIApi  = require('openai');
const openai = new OpenAIApi.OpenAI({
    api_key: process.env.OPENAI_API_KEY
  });


router.get('/ping/',async (req,res)=>{
    res.json({message:"success"})
});

router.post('/post-message/',async (req,res)=>{
    try {
        const { message } = req.body
        console.log(message)
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'Say this is a test' }],
            model: 'gpt-3.5-turbo',
          });
      
        res.json({ response: chatCompletion })
    } catch (error) {
        console.log(error)
      res.json({error})       
    }
});



module.exports = router