import mongoose from 'mongoose'
import express from 'express'
import { Router } from 'express';
import User from '../models/users.models.js';



const router = Router();


router.post("/addUser", async (req, res) => {
    const {name, email, age, gender} = req.body;

    try {
        const newUser = User.create({
            name: name,
            email: email,
            age: age,
            gender: gender
        }) 
        res.status(201).json(newUser)
    } catch (error) {
        console.log("Error in adding user", error);
    }
})

router.get("/showUsers", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in fetching user", error);

    }
})

export default router;