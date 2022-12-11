import { Sequelize } from 'sequelize';

const db = new Sequelize('sai_project', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
