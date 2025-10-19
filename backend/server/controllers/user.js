const pool = require("../db");

// ดึง users
exports.getUsers = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT username,email FROM easyclasspay.users;");
    res.json(rows);
} catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
}
};

exports.getOneUser = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT username, fname, lname, email FROM easyclasspay.users WHERE users.userid = '1';");
    res.json(rows);
} catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
}
};

