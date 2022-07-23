import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getGenres} from "../redux/actions/actions.js";
import {filterGenres, filterVideogamesDbApi} from "../redux/actions/actions.js";
import styles from "./filtro.module.css";


export default function FiltroGenero(){

    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.genres)

    useEffect(()=>{
       dispatch(getGenres())
    },[dispatch])

    function seleccionGenero(e) {
        dispatch(filterGenres(e.target.value)) 
        
    }

    function seleccionDbApi(e) {
        dispatch(filterVideogamesDbApi(e.target.value))        
    }

    return(
        <div className={styles.contenedor}>
            <select onChange={e=>seleccionGenero(e)} className={styles.selectGeneros}>
            <option value="Todos">Filtro Género</option>
            {
             allGenres.map(g=>{
                return(
                    <option value={g.name}>{g.name}</option>
                )
             })      
               
            }
                
            </select>

            <select onChange={e =>seleccionDbApi(e)} className={styles.selectDbApi}>
                <option value="">Filtro (Creados - Api)</option>
                <option value="todos">Todos</option>
                <option value="api">API</option>
                <option value="creados">Creados</option>
            </select>
        </div>
    )
}