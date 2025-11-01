import express, { Application, Request, Response } from 'express';
import routes from './routes/index';
import { initWhatsApp } from './bot/whatsapp';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    message: 'API está rodando 🚀',
    timestamp: new Date().toISOString(),
  });
});

initWhatsApp();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}/health`);
});
