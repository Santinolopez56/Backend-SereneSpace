import express, { Application } from "express";
import cors from "cors"

export class Server {
    private expressApp: Application= express()

    public init = ()  => {

        this.expressApp.use(cors())
        this.expressApp.use(express.json())
        this.expressApp.listen(8080)

    }
}