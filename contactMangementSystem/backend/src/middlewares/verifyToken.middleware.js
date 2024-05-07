import jwt from 'jsonwebtoken'


const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        console.log("No token");
        return res.status(401).json({message: "Token not found"});
    }
    const tokenString = token.split(' ')[1]; // Extract the token string

    jwt.verify(tokenString, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({message: "Invalid token"});
        }
        req.user = decoded;
        next()
    })
}

export default verifyToken