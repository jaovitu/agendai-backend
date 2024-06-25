import sequelize from 'sequelize';
import { Model } from 'sequelize';
import db from './index';

class Schedule extends Model {
  declare id: number;
  declare date: Date;
  declare reserved: boolean;
  declare professionalID: number;
}

Schedule.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  date: {
    type: sequelize.DATE,
    allowNull: false
  },

  reserved: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

  professionalID: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'professionals',
      key: 'id'
    }
  }
}, { sequelize: db, tableName: 'schedules', underscored: false, timestamps: false });

export { Schedule };
