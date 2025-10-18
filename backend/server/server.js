const express = require('express');
const app = express();
const morgan = require('morgan');
const { readdirSync } = require('fs');
const cors = require('cors');

// ✅ ใช้ express.json() แทน body-parser (อันนี้คือของใหม่)
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// โหลดทุก router
const files = readdirSync('./routers');
files.forEach((item) => {
    app.use('/api', require('./routers/' + item));
});

app.listen(3005, () => console.log('Server is running on port 3005'));
