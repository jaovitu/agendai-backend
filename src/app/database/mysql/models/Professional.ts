import sequelize from 'sequelize';
import { Model } from 'sequelize';
import db from './index';
import { User } from './User';
// import { Specialty } from './Specialty';

class Professional extends Model {
  declare id: number;
  declare userID: number;
  declare specialtyID: number;
  declare isActive: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
}

Professional.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  userID: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },

  specialtyID: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'specialties',
      key: 'id'
    }
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
}, { sequelize: db, tableName: 'professionals', underscored: false, timestamps: true });

Professional.belongsTo(User, { foreignKey: 'userID', as: 'user' });
// Professional.belongsTo(Specialty, { foreignKey: 'specialtyID', as: 'specialty' });

User.hasMany(Professional, { foreignKey: 'userID', as: 'professionals' });
// Specialty.hasMany(Professional, { foreignKey: 'specialtyID', as: 'professionals' });

export { Professional };
