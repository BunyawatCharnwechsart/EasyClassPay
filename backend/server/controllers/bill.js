const pool = require("../db");
const { error } = require("console");
const dayjs = require('dayjs');

//บิลทั้งหมด
exports.allBill = async(req, res) => {
    try{
        const [rows] = await pool.query("select b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate from easyclasspay.bill b left join billtype bt on b.idbillType = bt.idbillType left join paymentstatus ps on b.billid = ps.billid;");
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
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where ps.pstatus = 'Paid'; ");
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
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where ps.pstatus = 'Pending'; ");
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

exports.paidBill = async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where ps.pstatus = 'paid';");
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
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where bt.typebill = 'month'; ");
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
        const [rows] = await pool.query("SELECT b.billid,b.title,bt.typebill,ps.pstatus,b.amount,b.createddate FROM easyclasspay.bill b LEFT JOIN billtype bt ON b.idbillType = bt.idbillType LEFT JOIN paymentstatus ps ON b.billid = ps.billid where bt.typebill = 'getBill'; ");
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

exports.deleteBill = async(req, res) => {
    try{
        const { billid } = req.params;
    
        const [checkBill] = await pool.query(
            "SELECT billid FROM easyclasspay.bill WHERE billid = ?", 
            [billid]
        );
        
        if(checkBill.length === 0) {
            return res.status(404).json({ message: "ไม่พบบิลที่ต้องการลบ" });
        }
        
        await pool.query(
            "DELETE FROM easyclasspay.paymentstatus WHERE billid = ?", 
            [billid]
        );
        
        await pool.query(
            "DELETE FROM easyclasspay.bill WHERE billid = ?", 
            [billid]
        );
        
        res.status(200).json({ 
            message: "ลบบิลสำเร็จ",
            deletedBillId: billid 
        });
        
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};

exports.updateBill = async (req, res) => {
    const { billid } = req.params; 
    try {
        const [result] = await pool.execute(
            "UPDATE easyclasspay.paymentstatus SET pstatus = 'paid' WHERE billid = ?",
            [billid]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Bill not found" });
        }

        res.status(200).json({ message: "Bill updated successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error", error: err.message });
    }
};