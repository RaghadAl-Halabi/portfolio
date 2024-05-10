import db from "../models/index.js";

const Service = db.Service;

const getServices = async (req, res) =>{

    try {
        const services = await Service.findAll();

        if(!services){
            res.status(500).json({message: "Internal server error"})
        }

        res.json(services)
    } catch (error) {
        res.status(400).json(error)
    }     
}


 export default getServices
