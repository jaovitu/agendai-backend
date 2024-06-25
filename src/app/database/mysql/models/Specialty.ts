import sequelize from 'sequelize';
import { Model } from 'sequelize';
import db from './index';

class Specialty extends Model {
  declare id: number;
  declare name: string;
  declare isActive: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
}

Specialty.init({
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
}, { sequelize: db, tableName: 'specialties', underscored: false, timestamps: true });

export { Specialty };
