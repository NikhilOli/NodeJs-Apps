
import { Router } from 'express';
import User from '../models/users.models.js';
import validateUser from '../middlewares/validation.middlewares.js';



const router = Router();


router.post("/addUser", validateUser, async (req, res) => {
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

router.get("/getUser/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in fetching user", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

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

    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        console.log("User Updated successfully");
        res.status(200).json(updateUser);
    } catch (error) {
        console.log("Error in updating user", error);
        res.status(500).json({ message: "Internal server error" });
    }
})




export default router;