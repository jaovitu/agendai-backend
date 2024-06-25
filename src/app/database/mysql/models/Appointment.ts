import sequelize from 'sequelize';
import { Model } from 'sequelize';
import db from './index';

class Appointment extends Model {
  declare id: number;
  declare scheduleID: number;
  declare userID: number;
}

Appointment.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  scheduleID: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'schedules',
      key: 'id'
    }
  },

  userID: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  }
}, { sequelize: db, tableName: 'appointments', underscored: false, timestamps: false });

export { Appointment };
