import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

    if (!token) {
      return res.status(401).json({ msg: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Check if role or email indicates admin
    if (decoded.role !== "admin" && decoded.email !== "rampc45.07@gmail.com") {
      return res.status(403).json({ msg: "Access denied. Admins only." });
    }

    req.admin = decoded; // attach admin info for further use
    next();
  } catch (error) {
    console.error("Admin auth error:", error);
    return res.status(401).json({ msg: "Invalid or expired token." });
  }
};
