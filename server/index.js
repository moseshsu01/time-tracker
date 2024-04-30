const express = require('express');
const cors = require('cors');

var userRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.listen(8000, () => {
  console.log('Server is running');
});
