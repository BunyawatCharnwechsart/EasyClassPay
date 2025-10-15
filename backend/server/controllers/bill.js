const pool = require("../db");
const { error } = require("console");
const dayjs = require('dayjs');

//บิลทั้งหมด
exports.allBill = async(req, res) => {
    try{
        const [rows] = await pool.query("select b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate,b.duedate from easyclasspay.bill b left join billtype bt on b.idbillType = bt.idbillType left join paymentstatus ps on b.billid = ps.billid;");
        const formatted = rows.map(row => ({
            ...row,
            createddate: dayjs(row.createddate).format("DD-MM-YYYY HH:mm"),
            duedate: dayjs(row.duedate).format("DD-MM-YYYY HH:mm")
        }));
        res.json(formatted);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};

//บิลที่จ่ายแล้ว
exports.paidBill = async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate,b.duedate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where ps.pstatus = 'Paid'; ");
        const formatted = rows.map(row => ({
            ...row,
            createddate: dayjs(row.createddate).format("DD-MM-YYYY HH:mm"),
            duedate: dayjs(row.duedate).format("DD-MM-YYYY HH:mm")
        }));
        res.json(formatted);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};

//บิลที่รอจ่าย
exports.pendingBill = async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate,b.duedate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where ps.pstatus = 'Pending'; ");
        const formatted = rows.map(row => ({
            ...row,
            createddate: dayjs(row.createddate).format("DD-MM-YYYY HH:mm"),
            duedate: dayjs(row.duedate).format("DD-MM-YYYY HH:mm")
        }));
        res.json(formatted);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};

//บิลรายเดือน
exports.monthBill = async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate,b.duedate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where bt.typebill = 'month'; ");
        const formatted = rows.map(row => ({
            ...row,
            createddate: dayjs(row.createddate).format("DD-MM-YYYY HH:mm"),
            duedate: dayjs(row.duedate).format("DD-MM-YYYY HH:mm")
        }));
        res.json(formatted);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};

//บิลเก็บตัง
exports.getBill = async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate,b.duedate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where bt.typebill = 'getBill'; ");
        const formatted = rows.map(row => ({
            ...row,
            createddate: dayjs(row.createddate).format("DD-MM-YYYY HH:mm"),
            duedate: dayjs(row.duedate).format("DD-MM-YYYY HH:mm")
        }));
        res.json(formatted);
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
};