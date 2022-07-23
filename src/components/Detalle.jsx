import React from "react";
import { useEffect } from "react";
import {detailVideogame} from "../redux/actions/actions.js"
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import styles from "./detalle.module.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import Cargando from "./Cargando.jsx"


function Detalle(){

    const {idVideogame} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detailVideogame)
    const loading = useSelector((state) => state.loading)
    useEffect(() =>{
        
        dispatch(detailVideogame(idVideogame))
    },[])


    return(
        <>
            {
                loading?
                    <div className={styles.carga}>
                    <Cargando></Cargando>
                    </div>

                : <div className={styles.contenedor}>
                    
                        
                                
                                <div className={styles.contenedor2}>
                                    <h1 className={styles.name}>{detail.name}</h1>
                                    <p className={styles.description}>{detail.description}</p>
                                   
                                </div>

                                <div className={styles.contImagen}>
                                    
                                    <img src={detail.image} className={styles.imagen}></img>
                                    <p className={styles.p2}>Fecha de Lanzamiento: {detail.release_date}</p>
                                    <p className={styles.p2}>Rating: {detail.rating}</p>
                                    <p className={styles.p2}>Géneros: {detail.genres?.map(g =>{return (g.name + " - ")})}</p>
                                    <p className={styles.p3}>Plataformas: {detail.platforms?.map(p => {
                                        return(p + " - ")
                                    })}</p>
                                </div>

                            <Link to="/home"><BsArrowLeftCircle className={styles.btnAtras}/></Link>
                        
                    
                </div>
            }
        </>
    )
}

export default Detalle;