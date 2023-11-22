
import {Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class producto {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name:string

    @Column()
    price:number

    @Column()
    description:string

    @Column()
    image:string

    constructor(name:string,price:number,description:string,image:string){
        this.name=name
        this.price=price
        this.description=description
        this.image=image
    }

}
