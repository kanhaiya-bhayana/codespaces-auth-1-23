console.log("Hey CodeSpaces") 

const  {PORT} = process.env

const app = require('./app')

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})