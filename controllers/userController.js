const User =require("../models/userSchema")
const bcrypt = require("bcrypt")
const {validate} =require("../config/validator")

//adding a user
const addUser = async (req,res) => {
    const {username, email, password} = req.body;
    const valid = await validate({username, email, password});
    if (valid) {

const hashedPassword =await bcrypt.hash(valid.password, 8)
        const savedUser = await User.create({
            username,
            email,
            password:hashedPassword
        });

        res.stateus(201).json({
            success:true,
            massage:"user created",
            savedUser,
        });
    } else {
        res.stateus(400).json({
            error:true,
            massege: "Invalid data",
        });
    }
};

module.exports={addUser}





