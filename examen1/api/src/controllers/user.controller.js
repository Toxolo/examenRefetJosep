import bcrypt from "bcrypt";
import { findAllUsers, createUser as createUserModel } from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.json(users);
  } catch {
    res.status(500).json({ error: "Error obtenint usuaris" });
  }
};

export const createUser = async (req, res) => {
    const { name, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUserModel(name, hashedPassword, role);

    res.json({ message: "Usuari creat", userId });
};
