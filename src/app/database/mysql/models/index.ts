import { Sequelize } from 'sequelize';
import * as config from '../config/database-config';

const devDB = new Sequelize(config);

export default devDB;
