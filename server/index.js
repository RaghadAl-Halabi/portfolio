import express from 'express'
import db from './models/index.js'
import serviceRouter from './routes/ServiceRoutes.js'
import cors from "cors";


const sequelize = db.sequelize
const app = express()
app.use(express.json())
app.use(serviceRouter)

app.use(cors({
  credentials: true // If you're using cookies or authorization headers, set this to true
}));

app.use(express.static("../public"));
sequelize
      .sync({ force: true })
      .then(() => {
        console.log("Tables created.");
        db.initalizeModels()
      })
      .catch((err) => {
        console.log(err);
      });



app.listen(8080, ()=>console.log("Portfolio App listening at http://localhost:8080"))




