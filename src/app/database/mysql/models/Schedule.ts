import sequelize from 'sequelize';
import { Model } from 'sequelize';
import db from './index';
import { Professional } from './Professional';

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

Schedule.belongsTo(Professional, { foreignKey: 'professionalID' });
Professional.hasMany(Schedule, { foreignKey: 'professionalID' });

export { Schedule };
