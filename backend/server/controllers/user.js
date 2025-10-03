const pool = require("../db");

// ดึง users
exports.getUsers = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT * FROM users LIMIT 5");
    res.json(rows);
} catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
}
};

// เพิ่ม user
exports.createUser = async (req, res) => {
const { fname, lname, email, password } = req.body;
try {
    await pool.query(
    "INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)",
    [fname, lname, email, password]
    );
    res.json({ message: "User created successfully" });
} catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
}
};