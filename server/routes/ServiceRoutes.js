import express from "express"
import getServices from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.get("/services", getServices)

export default serviceRouter;







