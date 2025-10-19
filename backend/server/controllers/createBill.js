const pool = require('../db');

exports.createBill = async (req, res) => {
    try {
        const { title, amount } = req.body;

        if (!title || !amount) {
            return res.status(400).json({ message: "กรุณากรอกชื่อบิลและจำนวนเงิน" });
        }

        // เรียก Stored Procedure พร้อมส่งพารามิเตอร์ 4 ตัว
        const sql = "CALL create_bill_with_payment(?, ?, ?, ?)";

        pool.query(sql, [title, amount, null, 2], (err, result) => {
            if (err) {
                console.error("Error executing procedure:", err);
                return res.status(500).json({ message: "เกิดข้อผิดพลาดจากฐานข้อมูล" });
            }

            // ถ้ามีการ SELECT คืนค่าใน Procedure
            const data = result?.[0]?.[0] || null;

            return res.status(200).json({
                message: "สร้างบิลสำเร็จ",
                result: data
            });
        });

    } catch (err) {
        console.error("Server Error:", err);
        res.status(500).send("Server Error");
    }
};
