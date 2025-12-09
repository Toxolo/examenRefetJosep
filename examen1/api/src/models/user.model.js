import { withConnection } from "./db.js";

export const findAllUsers = async () => {
  return await withConnection(async (conn) => {
    const [rows] = await conn.query("SELECT id, name, role FROM usuari");
    return rows;
  });
};

export const createUser = async (name, hashedPassword, role) => {
  return await withConnection(async (conn) => {
    const [result] = await conn.query(
      "INSERT INTO usuari (name, password, role) VALUES (?, ?, ?)",
      [name, hashedPassword, role]
    );
    return result.insertId;
  });
};
