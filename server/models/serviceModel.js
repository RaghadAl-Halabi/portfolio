import { DataTypes } from "sequelize";


const Service = (sequelize, Sequelize) => {

  const Service = sequelize.define("services", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  return Service;
}


export default Service
 