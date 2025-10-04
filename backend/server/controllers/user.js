const pool = require("../db");

// ดึง users
exports.getUsers = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT * FROM easyclasspay.users;");
    res.json(rows);
} catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
}
};


exports.getBill = async (req, res) =>{
    try{
        const [rows] = await pool.query("SELECT * FROM easyclasspay.bill;");
        res.json(rows);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};