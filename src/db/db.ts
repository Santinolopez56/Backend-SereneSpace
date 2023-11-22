import "reflect-metadata";
import producto from "../models/products"
import {DataSource} from "typeorm"

export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"1234",
    database:"Serene-space Backend",
    synchronize:true,
    logging:true,
    entities:[ producto ]
})

AppDataSource.initialize()
    .then(()=> {
        console.log("Base funcionando")
    })
    .catch ((error)=>{
        console.log(error)
    })