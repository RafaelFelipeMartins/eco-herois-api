import { Request, Response } from 'express';

export const simpleCalc = (req: Request, res: Response): void => {
  const { expression } = req.body;

  try {
    const result = expression;
    res.json({ result });
  } catch {
    res.status(400).json({ error: 'Input inválido' });
  }
};
