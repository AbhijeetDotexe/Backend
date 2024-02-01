import mongoose from 'mongoose';


const pageSchema = mongoose.Schema({
    name:String,
    content: String,
    userid: Number
})

export default mongoose.model("pageModel",pageSchema);