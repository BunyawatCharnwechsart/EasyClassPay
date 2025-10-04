const { error } = require("console");
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
        console.log("Fetching Message.....")
        const [rows] = await pool.query("SELECT message,notificationdate FROM easyclasspay.notification;")
        res.json(rows);
    }catch(err){
        console.log(err);
        // res.status(500).send("Server Error");
        res.status(500).json({ error: "Failed to fetch Messages"});
    }
};