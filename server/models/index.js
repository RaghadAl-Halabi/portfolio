import { Sequelize } from "sequelize";
import sequelize from "../config/db.js"

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

import Service from "./serviceModel.js";

db.Service = Service(sequelize, Sequelize);

db.initalizeModels = ()=>{
  try {
    initalizeServiceModel()

  } catch (error) {
    console.error(error);
  }
}

const initalizeServiceModel = async () =>{
  try {
    await db.Service.bulkCreate([
        {
          name: "Web Apps Development",
          description: "I build websites using Node.js for powerful backend features and basic HTML, CSS, and JavaScript for the frontend. With MySQL handling data, I create websites that are interactive, easy to use, and reliable."
        }, {
          name:
            "Mobile Apps Development",
          description: "I build Android apps using Flutter and Firebase. I make apps that work smoothly and do cool stuff."
      
        }, {
          name: "Data Analysis",
          description: "I analyze data using popular Python libraries, making sense of numbers and graphs to enhance businesses' data comprehension with the use of various related tools."
      
        }, {
          name: "Powerpoint Design",
          description: "I create visually appealing PowerPoint presentations, using my modest Illustrator skills to craft engaging designs."
        }, {
          name: "Research",
          description: "I delve into AI topics, conducting thorough research to explore their details and implications."
        }])
    console.log("services inserted successfully")
} catch (error) {
    console.error(error);
}
}

export default db;
