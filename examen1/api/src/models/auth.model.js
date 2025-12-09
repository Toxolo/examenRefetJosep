import { withConnection } from "./db.js";

export const findUserByName = async (name) => {
  return await withConnection(async (conn) => {
    const [rows] = await conn.query(
      "SELECT id, name, password, role FROM usuari WHERE name = ?",
      [name]
    );
    return rows[0];
  });
};
