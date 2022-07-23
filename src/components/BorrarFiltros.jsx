import React from "react";
import {useDispatch} from "react-redux";
import { getVideogames } from "../redux/actions/actions.js";
import styles from "./borrarFiltros.module.css";


export default function BorrarFiltros(){

    
    const dispatch = useDispatch();

    
    function borrarFiltros(e){
        e.preventDefault(e);
        dispatch(getVideogames());
       
    }
    return(
        <div className={styles.contenedor}>
                
                <button id="borrar_filtros" onClick={(e)=>borrarFiltros(e)} className={styles.selectborrar}>Borrar Filtros</button>
        </div>
    )
}