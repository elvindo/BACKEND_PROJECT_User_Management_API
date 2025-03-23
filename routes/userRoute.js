import express from "express";

const router = express.Router();

// Dummy data (bisa diganti dengan database query)
const users = [
    { id: 1, name: "Elvindo", email: "Elvindo@email.com", age: 22 },
    { id: 2, name: "Gita", email: "Gita@email.com", age: 20 }
];

// GET: Ambil semua user
router.get("/", (req, res) => {
    res.json(users);
});

// GET: Ambil user berdasarkan ID
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// POST: Tambah user baru
router.post("/", (req, res) => {
    const { name, email, age } = req.body;
    
    if (!name || !email || !age) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        age
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Update user berdasarkan ID
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email, age } = req.body;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = { id: userId, name, email, age };
    res.json(users[userIndex]);
});

// DELETE: Hapus user berdasarkan ID
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
});

export default router;