import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const product = db.define(
  'product',
  {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default product;

(async () => {
  await db.sync();
})();
