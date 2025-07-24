const userModel = require("../models/user.model")

const getUsers= async(req,res) => {
    const users = await userModel.find();
    res.json(users);
}

module.exports={getUsers};