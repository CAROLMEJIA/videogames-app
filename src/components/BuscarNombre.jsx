import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {buscarVideogame} from "../redux/actions/actions.js";
import { IoSearchSharp } from "react-icons/io5";
import styles from "./buscarNombre.module.css";

export default function BuscarNombre(){

    const [valorInput, setValorInput] = useState("");
    const dispatch = useDispatch();

    function capturarNombre(e){
        e.preventDefault()
       setValorInput(e.target.value);
      
    }

    function OnClick(e){
        e.preventDefault()
        dispatch(buscarVideogame(valorInput));
       
    }



    return(

        <div className={styles.contenedor}>
            <input type="text" id="nombre" placeholder="Nombre" onChange={(e)=>capturarNombre(e)} className={styles.input}></input>
            <IoSearchSharp type="submit" onClick={(e)=>OnClick(e)} className={styles.btn}/>
        </div>
    )
}