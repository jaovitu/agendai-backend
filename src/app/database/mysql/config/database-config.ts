import 'dotenv/config';
import { Options } from "sequelize";

const {
  MYSQL_USER_DEV, MYSQL_PASSWORD_DEV, MYSQL_DATABASE_DEV, MYSQL_HOST_DEV,
  MYSQL_USER_TEST, MYSQL_PASSWORD_TEST, MYSQL_DATABASE_TEST, MYSQL_HOST_TEST
} = process.env;

const config: Record<string, Options> = {
  development: {
    username: MYSQL_USER_DEV,
    password: MYSQL_PASSWORD_DEV,
    database: MYSQL_DATABASE_DEV,
    host: MYSQL_HOST_DEV,
    dialect: 'mysql'
  },

  test: {
    username: MYSQL_USER_TEST,
    password: MYSQL_PASSWORD_TEST,
    database: MYSQL_DATABASE_TEST,
    host: MYSQL_HOST_TEST,
    dialect: 'mysql'
  }
};


export { config };
