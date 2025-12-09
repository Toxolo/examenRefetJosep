import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(authRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
