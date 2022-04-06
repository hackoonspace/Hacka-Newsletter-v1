import 'dotenv/config'
import express from 'express';
import helmet from 'helmet';
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
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "script-src": ["'self'", `'${process.env.CONTENT_SECURITY_POLICE_GOOGLE_HASH}'` || "''", "https://www.google.com/recaptcha/", "https://www.gstatic.com/"],
        "frame-src": ["'self'", "https://www.google.com/recaptcha/", "https://www.gstatic.com/"],
        "style-src": null,
      },
    })
);

app.use('/', indexRoute);
app.use('/email', dataRoute);

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});