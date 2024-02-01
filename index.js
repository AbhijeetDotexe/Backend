import express from "express";
import bodyParser from "body-parser";
// import dotenv from 'dotenv';
import {connection} from "./mongoose.js";
import { getUsers, deleteusers, updateuser, addusers } from "./users/crud.js";
import { redisConnection } from "./redis.js";
const app = express();


connection();
// redisConnection.connect();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("This is just for testing purpose");
})

app.get('/users',getUsers);
app.put('/update/:id',updateuser);
app.delete('/delete/:id',deleteusers);
app.post('/create',addusers);





app.listen(3000,()=>{
    console.log("Server is listening at port 3000");
})