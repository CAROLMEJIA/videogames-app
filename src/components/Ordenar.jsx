import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ordenarVideogames} from "../redux/actions/actions.js";
import styles from "./ordenar.module.css";



export default function Ordenar(){

    const [ordenar, setOrdenar] = useState('');
    const dispatch = useDispatch()

    function seleccionOrdenar(e) {
        e.preventDefault();
        dispatch(ordenarVideogames(e.target.value));
        setOrdenar(e.target.value);
               
    }

    return(

        <div  className={styles.contenedor}>
             <select name="" id="" onChange={e=>seleccionOrdenar(e)} className={styles.selectOrdenar}>
                    <option value="AZ">-- A - Z --</option>
                    <option value="ZA">-- Z - A --</option>
                </select>
        </div>
    )
}