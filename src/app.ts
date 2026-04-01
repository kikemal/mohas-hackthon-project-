import cors from 'cors';
import express from 'express';
import programRoutes from './routes/program.routes';
import { errorHandler, notFoundHandler } from './middleware/error.middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/programs', programRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
