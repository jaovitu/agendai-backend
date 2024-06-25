import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './app/middlewares/error-middleware';
import { customLOG } from './app/utils/custom-log';
import { usersRoutes } from './app/routes/users-routes';
import { specialtiesRoutes } from './app/routes/specialties-routes';
import { professionalsRoutes } from './app/routes/professionals-routes';
import { schedulesRoutes } from './app/routes/schedules-routes';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;
process.env.TZ = 'America/Sao_Paulo';

app.use(cors());
app.use(express.json());

app.use(usersRoutes);
app.use(specialtiesRoutes);
app.use(professionalsRoutes);
app.use(schedulesRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.clear();
  customLOG('START APP', `🔥 Server is running at http://localhost:${PORT}`, 'info');
});
