import React from "react";
import BuscarNombre from "./BuscarNombre.jsx";
import Ordenar from "./Ordenar.jsx";
import Filtro from "./Filtro.jsx";
import BorrarFiltros from "./BorrarFiltros.jsx";
import styles from "./menuMovil.module.css";
import {useState} from "react";
import { BsCardList } from "react-icons/bs";



export default function MenuMovil(){

    const[menuActivo, setMenuActivo] = useState(false);


    return(
        <div className={styles.general}>
            <BsCardList onClick={()=>setMenuActivo( menuActivo ? false : true)} className={styles.boton}></BsCardList>
            { menuActivo ?
            
                <div className={styles.subMenu}>
                    
                    <div><Filtro/></div>
                    <div><Ordenar/></div>
                    <div><BorrarFiltros/></div>
                    <div><BuscarNombre/></div>                  
                    
                </div>
            
            : null}
        </div>
    )
}