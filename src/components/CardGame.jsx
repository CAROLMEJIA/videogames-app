import React from "react";
import { Link } from "react-router-dom";
import styles from "./cardGame.module.css"



export default function CardGame(props){



 

    return(
     <div className={styles.contenedor}>

         
            
             
            {  props.idVideogame.length > 6 && <button onClick={(e)=> props.onclickEliminar(props.idVideogame)}>x</button>}

             <Link to={`/detalle/${props.idVideogame}`} className={styles.link}>
                   
                        <div className={styles.contenedorInfo}>
                            <p className={styles.name}>{props.name}</p>
                        </div>

                        <div className={styles.contenedorImg}>
                            <img src={props.image} className={styles.imagen}/>
                         </div>

                        <div className={styles.contenedorInfo}>
                        <p className={styles.generos}>{props.genres.map(g =>{return (" - "+g.name + " - ")})}</p>
                        </div>
                    
             </Link>
            
    </div>
    )
}