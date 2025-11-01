import express from 'express';
import { simpleCalc } from '../controllers/calcController';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'API WhatsApp Bot (TypeScript) rodando!' });
});

router.post('/calc', simpleCalc);

export default router;
