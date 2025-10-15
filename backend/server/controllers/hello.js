// controllers/hello.js
exports.getHello = async (req, res) => {
try {
    res.send("Hello World!");
} catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
}
};