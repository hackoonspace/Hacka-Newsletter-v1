import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Email from '../models/email';
import { validateToken } from '../utils/recaptcha';
const router = express.Router();

//rota para adicionar um e-mail a newsletter
router.post('/subscribe', 
    body('email').isEmail(),
    body('token').isString(),
    async (req : Request, res : Response) => 
    {
        const errors = validationResult(req);

        if (!errors.isEmpty())
            return res.status(400).json({ 
                errors: errors.array() 
            });

        const token = req.body.token;

        const recaptchaValidateResponse = await validateToken(token);

        if(!recaptchaValidateResponse) 
            return res.redirect('/?recaptcha_fail=true');

        const email = req.body.email;
        const emailModel = new Email();
        
        const databaseResponse = await emailModel.insertEmailToDatabase(email);

        if(databaseResponse)
            return res.redirect('/?success=true');
  
        res.redirect('/?success=false');
    }
);

//rota para retirar um e-mail da newsletter
router.post('/unsubscribe', 
    body('email').isEmail(),
    body('token').isString(),
    async (req : Request, res : Response) => {

        const errors = validationResult(req);

        if (!errors.isEmpty())
            return res.status(400).json({ 
                errors: errors.array() 
            });

        const token = req.body.token;

        const recaptchaValidateResponse = await validateToken(token);

        if(!recaptchaValidateResponse) 
            return res.redirect('/descadastrar?recaptcha_fail=true');

        const email = req.body.email;
        const emailModel = new Email();

        const databaseResponse = await emailModel.deleteEmailFromDatabase(email);

        if(databaseResponse)
            return res.redirect('/descadastrar?success=true');

        res.redirect('/descadastrar?success=false');
    }
);

export default router;