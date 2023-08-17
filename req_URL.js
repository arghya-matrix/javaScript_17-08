require('dotenv').config();
const express= require('express');
const server= express();

server.use(express.static(process.env.STATIC_FOLDER));

server.use((req,res,next) => {
    console.log(req.method, req.ip, req.path);
    next();
})
// localhost:8080/data?name=Raju&age=12
server.get("/home", (req, res) => { // Using query string
    let person = req.query.name;
    let age= req.query.age;
    res.json({name:person});
})
// localhost:8080/data/raju/dholakpur
server.get("/data/:name/:city", (req, res)=> { // Using parameter query
    let name= req.params.name;
    let city = req.params.city;
    res.json({name, city});
})

server.listen(process.env.PORT, () => {
    console.log("Server started at ", process.env.PORT);
})