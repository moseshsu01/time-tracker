const connectDB = require('./db');

const express = require('express');
const cors = require('cors');

var userRouter = require('./routes/users');
var entryRouter = require('./routes/entries');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/entries', entryRouter);

connectDB();

app.listen(8000, () => {
  console.log('Server is running');
});
