const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { readdirSync } = require('fs');
const cors = require('cors');

// const product = require('./routers/product')
// const auth = require('./routers/auth')

//step4 Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// app.use('/api',product)
// app.use('/api',auth)
const files = readdirSync('./routers'); files.forEach((item) => {
    app.use('/api', require('./routers/' + item)); 
});

//step2
app.listen(3005,()=>
console.log('Server is running on port 3005')
);