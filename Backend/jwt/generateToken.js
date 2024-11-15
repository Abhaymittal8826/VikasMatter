import jwt from 'jsonwebtoken';
const createTokenAndSaveCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
            expiresIn: "10d"
        });
        
        res.cookie("jwt", token, {
            // httpOnly: true,
            // secure: true,
            // sameSite: "lax"
        });
    }
     catch (error) {
        console.error("JWT token generation error:", error);
        res.status(500).json({ error: "Error generating token" });
    }
};

export default createTokenAndSaveCookie;
