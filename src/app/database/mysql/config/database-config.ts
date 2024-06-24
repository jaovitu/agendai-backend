import 'dotenv/config';
import { Options } from 'sequelize';

const {
  MYSQL_USER_DEV, MYSQL_PASSWORD_DEV, MYSQL_DATABASE_DEV, MYSQL_HOST_DEV
} = process.env;

const config: Options =  {
  username: MYSQL_USER_DEV,
  password: MYSQL_PASSWORD_DEV,
  database: MYSQL_DATABASE_DEV,
  host: MYSQL_HOST_DEV,
  dialect: 'mysql'
};


export = config;
