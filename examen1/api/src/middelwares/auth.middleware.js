import jwt from "jsonwebtoken";

const SECRET = "clau_super_secreta";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;  

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionat" });
  }

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).json({ error: "Token invàlid" });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Accés denegat" });
  next();
};
