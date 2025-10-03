const pool = require("../db")

exports.getAllNoti= async (req, res) => {
try {
    const [rows] = await pool.query("SELECT * FROM easyclasspay.notification;");
    res.json(rows);
} catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
}
};

exports.getMessageNoti= async(req, res)=>{
    try{
        const [rows] = await pool.query("SELECT message FROM easyclasspay.notification;")
        res.json(rows);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
}