import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

mongoose.connect('mongodb://admindev:secretpassword@ds117749.mlab.com:17749/barcodes-dev');

const app = express();

// app.get('/', (req, res) =>
//   res.send('Hello World!')
// );

app.use('/api', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
