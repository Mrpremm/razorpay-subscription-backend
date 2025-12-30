require('dotenv').config();
const app=require('./app');
const PORT=process.env.PORT|| 4000;

app.post('/',(req,res)=>{
  console.log("Hello World");
})
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})