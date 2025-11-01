import { Request, Response } from 'express';
import { evaluate } from 'mathjs';

export const simpleCalc = (req: Request, res: Response): void => {
  const { expression } = req.body;

  try {
    const result = evaluate(expression);
    res.json({ result });
  } catch {
    res.status(400).json({ error: 'Input inválido' });
  }
};
