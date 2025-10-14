const pool = require("../db");
const { error } = require("console");

exports.getfriend = async(req, res)=>{
    try{
        const [rows] = await pool.query("SELECT username,email FROM easyclasspay.users;");
        res.json(rows);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};