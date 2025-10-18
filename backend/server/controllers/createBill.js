const pool = require('../db');

exports.createBill = async (req, res) => {
    try {
        const { title, amount } = req.body;
        if (!title || !amount) {
            return res.status(400).json({ message: "กรุณากรอกชื่อและยอดบิล" });
        }
        const sql = "INSERT INTO bill (title, amount, createddate, createdby, idbillType) VALUES (?, ?, NOW(), NULL, 1);";
        pool.query(sql, [title, amount], (err, result) => {
            if (err) {
                console.error("Error inserting:", err);
                return res.status(500).json({ message: "เกิดข้อผิดพลาดจากฐานข้อมูล" });
            }
            return res.status(200).json({
                message: "สร้างบิลสำเร็จ",
                billId: result.insertId
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
