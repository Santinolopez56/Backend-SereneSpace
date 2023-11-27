import "reflect-metadata";
import producto from "../models/products"
import {DataSource} from "typeorm"



export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"1234",
    database:"serene",
    synchronize:true,
    logging:true,
    entities:[ producto ]
})

AppDataSource.initialize()
    .then(async() => {
        const productRepository = AppDataSource.manager.getRepository(producto);
        const existingProducts = await productRepository.find();


        if (existingProducts.length === 0) {
            const producto1 = new producto("Sillon",100 ,"Sillón elegante y cómodo para tu hogar u oficina.", "https://tiendaliving.com.ar/cdn/shop/products/MODULADO1_600x.jpg?v=1652991319");
            const producto2 = new producto("Sillas",50 ,"Sillas ergonómicas para comodidad y estilo excepcionales.", "https://images.fravega.com/f500/cf5432a3b51e6e4e0257952a298c1ec8.jpg");
            const producto3 = new producto("Mesita",65 ,"Compacta y versátil mesita para tu comodidad diaria.","https://http2.mlstatic.com/D_NQ_NP_621952-MLA32657222908_102019-O.webp");
            const producto4 = new producto("Alfombra", 45 ,"Alfombra suave y elegante, mejora cualquier espacio con estilo.", "https://static.wixstatic.com/media/f94560_755521dc46d94c48830f33a98d3f9459~mv2.jpg/v1/fill/w_520,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f94560_755521dc46d94c48830f33a98d3f9459~mv2.jpg");
            const producto5 = new producto("Escritorio", 80 ,"Escritorio para que puedas trabajar desde la comodidad de tu hogar.", "https://http2.mlstatic.com/D_NQ_NP_968628-MLA43940688156_102020-O.webp");
            const producto6 = new producto("Sillon bola",120 , "Sillon en forma circular para disfrutar una pelicula con comida.", "https://http2.mlstatic.com/D_NQ_NP_684539-MLA49222243701_022022-O.webp");

            await productRepository.save([producto1, producto2, producto3, producto4, producto5,producto6]);
        }
    })

AppDataSource.initialize()
    .then(()=> {
        console.log("Base funcionando")
    })
    .catch ((error)=>{
        console.log(error)
    })
