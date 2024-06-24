import sequelize from 'sequelize';
import { Model } from 'sequelize';
import db from './index';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare role: string;
  declare isActive: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
}

User.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: {
    type: sequelize.STRING,
    allowNull: false
  },

  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: sequelize.STRING,
    allowNull: false,
  },

  role: {
    type: sequelize.ENUM('ADMIN', 'PATIENT', 'PROFESSIONAL'),
    allowNull: false
  },

  isActive: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },

  createdAt: {
    type: sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.fn('now')
  },

  updatedAt: {
    type: sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.fn('now')
  },

  deletedAt: {
    type: sequelize.DATE
  }
}, { sequelize: db, tableName: 'users', underscored: false, timestamps: true });

export { User };
