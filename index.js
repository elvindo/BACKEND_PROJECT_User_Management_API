import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/userRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
app.use("/users", usersRoutes);

// Main Route
app.get("/", (req, res) => {
    res.send("Welcome to Express API with PostgreSQL");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
