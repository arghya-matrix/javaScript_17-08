require('dotenv').config();
const express= require('express');
const server= express();

const bodyParser= require('body-parser');

server.use(express.static(process.env.STATIC_FOLDER));
server.use((req,res,next)=>{
    console.log(req.method,req.ip, req.path);
    next();
})


server.use(bodyParser.urlencoded()); // For form data
server.use(bodyParser.json()); // for json data

// post method is used to send the data to body
server.post("/person", (req, res) => {
    // console.log(req.body) ;
    // res.send(req.body);
    let name= req.body.name;
    let age= req.body.age;
    let city= req.body.city;
    res.send({name, age, city});
});

server.listen(process.env.PORT, ()=> {
    console.log("Server started at Port", process.env.PORT);
})