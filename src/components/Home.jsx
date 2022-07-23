import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getVideogames } from "../redux/actions/actions.js";
import CardGame from "./CardGame.jsx";
import Nav from "./Nav.jsx";
import Paginado from "./Paginado.jsx";
import Cargando from "./Cargando.jsx";
import { deleteVideogame} from "../redux/actions/actions.js";
import styles from "./home.module.css"


export default function Home(){

    const dispatch = useDispatch();
    let allVideoGames = useSelector((state) =>state.videogames);
    let loading = useSelector((state) =>state.loading);

    let currentPage = useSelector((state) => state.currentPage)
   
    const [videogamesPerPage, setVideogamesPerPage] = useState(15); //videojuegos por página
    const indexOfLastVideogame = currentPage * videogamesPerPage; //indice del último videojuego
    const indexOfirstVideogame = indexOfLastVideogame - videogamesPerPage; // indice del primer videojuego
    const currentVideogames = allVideoGames.slice(indexOfirstVideogame, indexOfLastVideogame) //videojuegos que están en la página actual





    useEffect(() =>{
        
        dispatch(getVideogames());
        
    },[])

    
    function onclickEliminar(idVideogame){
        dispatch(deleteVideogame(idVideogame));
        dispatch(getVideogames());
   
    }

    

    return(
        
        <div className={styles.contenedorGeneral}>
            <Nav></Nav>
          

           <div className={styles.contVideogames}>
               
                        {
                           
                            loading?
                            <Cargando/>
                           
                            
                            : currentVideogames.map(v =>{

                                return (
                              
                                   
                                        
                                        <CardGame 
                                        name={v.name} 
                                        image={v.image} 
                                        genres={v.genres}
                                        key={v.id}
                                        idVideogame={v.id}
                                        onclickEliminar={onclickEliminar} />


                   
                                 
                                )
                                    
                        })
                        }

                {
                    !loading && currentVideogames.length === 0 &&<h1>No se encontró</h1>
                }

            </div>
                {
                    loading || <Paginado videogamesPerPage ={videogamesPerPage} allVideoGames={allVideoGames.length} />
                }
        
        </div>
    )
}
