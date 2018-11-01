const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const apiRoutes = require('./routes/api/index');
const app = express();

app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json())

app.listen(process.env.PORT || 3000);
