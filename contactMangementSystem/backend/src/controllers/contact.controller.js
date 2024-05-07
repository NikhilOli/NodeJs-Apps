import Contact from '../models/contact.model.js'

const addContact = async (req, res) => {
    const {username, email, phone, address} = req.body
    if(!username || !email || !phone || !address) return res.status(401).json({message: "Please fill all the fields"})

    try {
        const existingContact = await Contact.findOne({email, phone});
        if(existingContact){
            return res.json({message: "Contact already exists"})
        }
        console.log(req.user.id);
        const newContact = Contact.create({
            username,
            email,
            phone,
            address,
            postedBy: req.user.id
        })

        return res.status(201).json({ message: "New contact created", newContact });
    } catch (error) {
        console.log("Errror creating contact");
    }
}

export {addContact};