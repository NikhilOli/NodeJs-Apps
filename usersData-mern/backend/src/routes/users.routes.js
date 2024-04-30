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
        // let userHTML = "<h1>All Users</h1>";
        // allUsers.forEach(user => {
        //     userHTML += `<li>${user.name}</li>`;
        // });
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in fetching user", error);

    }
})

router.delete("/deleteUser/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const deleteUser = await User.findOneAndDelete({_id : id});
        console.log("User deleted successfully");
        res.status(200).json(deleteUser);
    } catch (error) {
        console.log("Error in fetching user", error);

    }
})
router.patch("/updateUser/:id", async (req, res) => {
    const { id } = req.params;
    const {name, email, age, gender} = req.body;

    console.log(id);
    try {
        const updateUser = await User.findOneAndDelete(id, req.body, {new: true});
        console.log("User Updated successfully");
        res.status(200).json(updateUser);
    } catch (error) {
        console.log("Error in fetching user", error);

    }
})



export default router;