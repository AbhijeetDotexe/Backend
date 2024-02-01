import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
});


export default mongoose.model("userModel", userSchema);