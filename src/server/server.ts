import express, { Application } from "express";
import cors from "cors";
import router from "../routes/routes";

export class Server {
    private expressApp: Application= express()

    public init = ()  => {

        this.expressApp.use(cors())
        this.expressApp.use(express.json())
        this.expressApp.use(router)
        this.expressApp.listen(8080)

    }
}