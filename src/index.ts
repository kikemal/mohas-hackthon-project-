import dotenv from 'dotenv';
import app from './app';
import { env } from './config/env';
import { logger } from './utils/logger';

dotenv.config();

app.listen(env.port, () => {
  logger.info(`Backend running at http://localhost:${env.port}`);
});
