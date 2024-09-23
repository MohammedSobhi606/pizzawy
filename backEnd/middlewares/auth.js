import jwt from "jsonwebtoken";

// Middleware function to validate JWT token

const authenticateToken = (req, res, next) => {
  const { token } = req.headers;

  if (token == null) return res.status(401).send("Access denied");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = decoded.id; // Pass user to next middleware function

    next();
  } catch (err) {
    res.status(403).send("Token is not valid");
  }
};

export default authenticateToken;
