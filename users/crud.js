import userModel from './userschema.js';

export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.json(users);
    } catch (error) {
        res.json({ error: "Error getting details of the users" });
    }
};

export const addusers = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.json({ error: "Error adding new User" });
    }
};

export const deleteusers = async (req, res) => {
    try {
        const deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });
        res.json(deletedUser);
    } catch (error) {
        res.json({ error: "Error deleting the user" });
    }
};

export const updateuser = async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.json({ error: "Error updating the user" });
    }
};