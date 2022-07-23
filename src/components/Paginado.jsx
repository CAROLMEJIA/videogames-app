import React from "react";
import styles from "./paginado.module.css"
import {useDispatch} from "react-redux";
import {currentPage} from "../redux/actions/actions.js"

/*Este es el paginado*/
export default function Paginado({videogamesPerPage, allVideoGames}){

    const dispatch = useDispatch();
    
    function value(v){
        dispatch(currentPage(v))
    }
    const pageNumbers =[];

    for(let i=1; i<=Math.ceil(allVideoGames/videogamesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div className={styles.contenedor}>
           
            <div className={styles.lista}>
              
                {
                    pageNumbers.length > 0 && pageNumbers.map(n =>{
                      return(  
                      
                             <div key={n} className={styles.item}>

                                <button onClick={(e)=> value(n)} className={styles.boton}>{n}</button>

                            </div>
                      )
                    })
                }
            </div>
        </div>
    )

}