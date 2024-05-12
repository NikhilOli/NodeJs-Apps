import jwt from 'jsonwebtoken'


const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({message: "Token not found"});
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({message: "Invalid token"});
        }
        req.user = decoded;
        next()
    })
}

export default verifyToken