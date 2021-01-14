  const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.get("/username/:name", (req,res)=>{
    let n=req.params.name;
    res.send(`Hello ${n}`);
})
app.listen(3000);