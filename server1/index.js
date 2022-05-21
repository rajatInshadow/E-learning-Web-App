const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router();

const app = express()

app.use(bodyParser());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/fail', (req, res) => res.status(403).json({msg: 'You are not allowed to access this'}));


app.use("/api/courses", require("./courses"));


app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = router;