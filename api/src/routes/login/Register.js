require("dotenv").config();
const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { Users } = require("../../db.js");
const jwt = require("jsonwebtoken");
const router = Router();

router.post("/", async(req,res) =>{
    let {name, email, profilePicture, password} = req.body;
    const saltRounds = 10;

    if(!email){
        return res.status(400).json("You need email");
    }

    try {
        const finduser = await Users.findOne({
            where:{
                email: email
            }
        })

        if(finduser){
            if(!finduser.available){
                return res.status(400).send("User not available")
            }
            return res.status(400).send("User already exist")
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newuser = await Users.create({
            email,
            name,
            profilePicture,
            password: hashedPassword,
        });
            return res.status(200).send(newuser);
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = router