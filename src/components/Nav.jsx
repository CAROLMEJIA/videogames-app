import React, { useState } from "react";
import BuscarNombre from "./BuscarNombre.jsx";
import Filtro from "./Filtro.jsx";
import BorrarFiltros from "./BorrarFiltros.jsx"
import Ordenar from "./Ordenar.jsx";
import { Link } from "react-router-dom";
import styles from "./nav.module.css"
import { IoSearchSharp, IoAddSharp } from "react-icons/io5";
import { MdAddCircleOutline } from "react-icons/md";
import logo from "../img/logo.png";
import MenuMovil from "./MenuMovil.jsx";

export default function Nav(){

    const [buscar, setBuscar] = useState(false);
       
   
    return(
    
        <div className={styles.contenedor}>
            
            <div className={styles.contenedorLogoIconos}>

                    <div className={styles.buscar}>

                        <Link to="/crear"><MdAddCircleOutline className={styles.iconCrear}/></Link>
                        <IoSearchSharp onClick={(e) => setBuscar(buscar?false:true)} className={styles.iconBuscar}/>
                        {
                            buscar? <BuscarNombre></BuscarNombre>
                            :null
                        }
                        

                    </div>

                    <div className={styles.contenedorImg}>
                    <Link to="/home"> <img src={logo} className={styles.img}></img></Link>
                    </div>

            </div>
             
            
            <div className={styles.zonaFiltros}>
               
               <Filtro></Filtro>
               <Ordenar></Ordenar>
               <BorrarFiltros></BorrarFiltros>
               
           </div>
           <div className={styles.menuMovil}>
                <MenuMovil/>
           </div>         
           

        </div>

    )
}