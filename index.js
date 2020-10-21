const express=require("express");
const app=express();
let port =process.env.PORT||3000;

data=[
    {"contoh":"reizha"} 
]


app.get("/",(req,res)=>{
    res.send(data)
})

app.listen(port,()=>{
    console.log("http://localhost:3000")
})