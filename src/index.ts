import 'dotenv/config'
import express from 'express';
import { renderFile } from 'ejs';

import indexRoute from './routes';
import dataRoute from './routes/email';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.engine('html', renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/email', dataRoute);

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});