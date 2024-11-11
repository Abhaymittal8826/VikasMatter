import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; // Adjust based on your file structure

const authenticateToken = async (req, res, next) => {
    const token = req.cookies.jwt; // Assuming the token is stored as a cookie
    if (!token) {
        return res.status(401).json({ msg: "Access Denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "No User Found" });
        }

        req.user = user;  // Attach the user to the request object
        next();  // Call next() to proceed with the request
    } catch (error) {
        console.error("Error during token authentication:", error);
        res.status(500).json({ msg: "Internal Error" });
    }
};

export default authenticateToken;
