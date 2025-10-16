const { error } = require("console");
const pool = require("../db")
const dayjs = require("dayjs");

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
        const formatted = rows.map(row => ({
            ...row,
            createddate: dayjs(row.createddate).format("DD-MM-YYYY HH:mm"),
            duedate: dayjs(row.duedate).format("DD-MM-YYYY HH:mm")
        }));
        res.json(formatted);
    }catch(err){
        console.log(err);
        // res.status(500).send("Server Error");
        res.status(500).json({ error: "Failed to fetch Messages"});
    }
};