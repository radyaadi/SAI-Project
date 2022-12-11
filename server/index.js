import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import productRoute from './routes/productRoute.js';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));
app.use(productRoute);

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`);
});
