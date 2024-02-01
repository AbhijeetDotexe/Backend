import pageModel from "./pageSchema";
import { redisConnection } from "../redis";


export const allpages = async(req,res)=>{
    try{
        const data = await pageModel.find({});
        res.send(data);
    }catch(error){
        res.json({error:"Error getting the data from the database"});
    }
}

export const addPage = async(req,res)=>{
    try{
        const sameName = await pageModel.find({name:req.body.name});
        if(!sameName){
            const idcount = userModel.count({}, function( err, count){
                return count;
            })
            req.body.id = idcount;
            const newPage = new pageModel(req.body);
            await newPage.save();
            res.json(newPage);
        }else{
            res.send("Page with Same name already Exists");
        }
    }catch(error){
        res.json({error:"Error adding new page"})
    }
}


export const deletePage = async(req,res)=>{
    try{
        const present = await pageModel.findOne(req.params.id);
        if(!present){
            res.send("Page does not exists");
        }else{
            const data = await pageModel.findOneAndDelete({id: req.params.id});
            res.json(data);
        }
    }catch(error){
        res.json({error:"Error deleting the page"});
    }
}



export const updatePage = async(req,res)=>{
    try{
        const present = await pageModel.findOne(req.params.id);
        if(!present){
            res.send("Page does not exists");
        }else{
            const content = { content: req.body.content };
            const data = await pageModel.findOneAndUpdate({id,content});
            res.send(data);
        }
    }catch(error){
        res.json({error:"Cannot update the page"})
    }
}