import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req : Request, res : Response) => {
    res.render('index.ejs', {
        success: req.query.success
    });
});

router.get('/descadastrar', (req : Request, res : Response) => {
    res.render('descadastrar.ejs', {
        success: req.query.success
    });
});

router.get('/privacidade', (req : Request, res : Response) => {
    res.render('privacidade.ejs');
});

export default router;