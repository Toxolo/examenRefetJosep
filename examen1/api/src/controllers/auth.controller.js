import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByName } from "../models/auth.model.js";

const SECRET = process.env.SECRET;

export const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await findUserByName(name);
    if (!user) return res.status(401).json({ error: "Usuari no trobat" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(403).json({ error: "Contrasenya incorrecta" });

    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role
      },
      SECRET,
      { expiresIn: "2h" }
    );

    res.cookie("token", token);
    res.json({ message: "Sessió iniciada" });

  } catch (err) {
    res.status(500).json({ error: "Error del servidor" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sessió tancada" });
};
