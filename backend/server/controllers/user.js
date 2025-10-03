const pool = require("../db");

exports.username = async(req, res) => {
    try {
        const result = await pool.query("SELECT * FROM easyclasspay.users LIMIT 5");
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};