

const validateUser = (req, res, next) => {
    const { name, email, age, gender } = req.body;
    
    if (!name || !email || !age || !gender) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if(age > 100)
        return res.status(400).json({error: 'Age must be less than 100'})
    
    next(); 
};

export default validateUser
