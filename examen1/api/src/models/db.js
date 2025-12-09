import mysql from "mysql2/promise";

const config = {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "USUARIS",
    port: 3306
};

// Funció que obri connexió, executa la callback, i la tanca
export async function withConnection(callback) {
    const connection = await mysql.createConnection(config);
    try {
        const result = await callback(connection);
        return result;
    } finally {
        await connection.end();
    }
}
