const express=require('express');
const cors=require('cors');
 const app=express();

 app.use(cors());
 app.use(express.json());
 app.use('/api/payment',require('./routes/payment.routes'));
 module.exports=app;