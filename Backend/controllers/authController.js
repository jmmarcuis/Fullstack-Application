const User = require("../models/user");
const jwt = require("jsonwebtoken");

// THIS FILE IS RESPONSIBLE FOR HANDLING CRUD OPERATIONS




//REGISTRATION OF ADMIN ACCOUNT
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

     if (!name) {
      return res.json({
        error: "Name is Required",
      });
    }

     if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }

     const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already been used",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//LOGIN OF ADMIN ACCOUNT
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "No user found" });
    }

    if (user.password !== password) {
      return res.json({ error: "Incorrect password" });
    }

    // Use the secret key from the environment variable
    const secretKey = process.env.JWT_SECRET;

    // Check if the secret key is available
    if (!secretKey) {
      console.error("JWT secret key not configured");
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, {
      
      expiresIn: "1h", // Set the expiration time as needed
    });

    return res.json({ success: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const isAuthenticatedMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token.split(" ")[1], secretKey, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const user = await User.findById(decoded.userId); // Corrected line
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      req.user = user; // Attach user information to the request
      next();
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

const logoutUser = (req, res) => {
  try {
    
    return res.json({ success: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const validateToken = (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      console.error("JWT secret key not configured");
      return res.status(500).json({ error: "Internal Server Error" });
    }

    jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Token invalid or expired" });
      }

      // Token is valid
      res.json({ success: true });
    });
  } catch (error) {
    console.error("Token validation error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

 
module.exports = {
 
  registerUser,
  loginUser,
  isAuthenticatedMiddleware, logoutUser,validateToken
};