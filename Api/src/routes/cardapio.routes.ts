import express from 'express';
import cardapio from '../data/cardapio.json';
const router = express.Router();

router.get("/cardapio", async (req, res) =>{
    res.status(200).json(cardapio)
})

export default router;