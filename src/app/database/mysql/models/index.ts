import { Sequelize } from 'sequelize';
import { config } from '../config/database-config';

const devDB = new Sequelize(config.development);

export { devDB };
