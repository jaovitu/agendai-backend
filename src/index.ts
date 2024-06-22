import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './app/middlewares/error-middleware';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;
process.env.TZ = 'America/Sao_Paulo';

app.use(cors());
app.use(express.json());

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.clear();
  console.log(`🔥 Server is running at http://localhost:${PORT}`);
});
