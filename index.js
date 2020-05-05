const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users');
const apiRouter = require('./routers/api');

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/users', usersRouter);
app.use('/api/customers/',apiRouter);

app.use(express.static('public'))

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
