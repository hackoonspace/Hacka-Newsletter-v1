import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Email from '../models/email';
const router = express.Router();

//rota para adicionar um e-mail a newsletter
router.post('/subscribe', 
    body('email').isEmail(),
    async (req : Request, res : Response) => 
    {
        const errors = validationResult(req);

        if (!errors.isEmpty())
            return res.status(400).json({ 
                errors: errors.array() 
            });

        const email = req.body.email;
        const emailModel = new Email();
        
        const databaseResponse = await emailModel.insertEmailToDatabase(email);

        if(databaseResponse)
            return res.send('E-mail cadastrado com sucesso');
  
        res.status(500).send('Problema ao cadastrar e-mail');
    }
);

//rota para retirar um e-mail da newsletter
router.post('/unsubscribe', 
    body('email').isEmail(),
    async (req : Request, res : Response) => {

        const errors = validationResult(req);

        if (!errors.isEmpty())
            return res.status(400).json({ 
                errors: errors.array() 
            });

        const email = req.body.email;
        const emailModel = new Email();

        const databaseResponse = await emailModel.deleteEmailFromDatabase(email);

        if(databaseResponse)
            return res.send('E-mail descadastrado com sucesso');

        res.status(500).send('Problema ao descadastrar o e-mail');
    }
);

export default router;