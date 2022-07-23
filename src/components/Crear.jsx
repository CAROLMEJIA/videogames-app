import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useEffect } from "react";
import { Link } from "react-router-dom";
import {getGenres, getPlatforms, postVideogame} from "../redux/actions/actions.js";
import styles from "./crear.module.css";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function Crear(){


    const dispatch = useDispatch();
    const allGenres = useSelector((state) => state.genres)
    const allPlatforms = useSelector((state) => state. platforms)

    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        release_date: "",
        rating: "",
        genres: [],
        platforms: []
    })

    const [error, setError] = useState({})

    useEffect(()=>{
       dispatch(getGenres())
       dispatch(getPlatforms())
    },[])

    function validarErrores(input){
        let errores ={};

        if(!input.name){
            errores.name = "El campo nombre no puede estar vacío"
        }else if(!input.image){
            errores.image = "El campo imagen no puede estar vacío"
        }else if(!input.description){
            errores.description = "El campo Descripción no puede estar vacío"
        }else if(!input.release_date){
            errores.release_date = "El campo Fecha no puede estar vacío"
        }else if(!input.rating){
            errores.rating = "El campo rating no puede estar vacío"
        }else if(!input.genres){
            errores.genres = "El campo genres no puede estar vacío"
        }else if(!input.platforms){
            errores.platforms = "El campo platforms no puede estar vacío"
        }

        return errores;
    }

    function capturarInputs(e){

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setError(validarErrores({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

   

    function capturarSelectGenres(e){
        setInput({
            ...input,
            genres:[...input.genres, e.target.value]
        })
    }

    function capturarSelectPlatforms(e){
        setInput({
            ...input,
            platforms:[...input.platforms, e.target.value]
        })
    }

    function enviarDatos(e){
        e.preventDefault(postVideogame);
        dispatch(postVideogame(input))
        alert("Video Juego creado");
        setInput({
            name: "",
            image: "",
            description: "",
            release_date: "",
            rating: "",
            genres: [],
            platforms: []
        })

    }

    function deleteGenres(g){
        setInput({
            ...input,
            genres: input.genres.filter(gen => gen !== g)
            
        })
    }

    function deletePlatforms(p){
        setInput({
            ...input,
            platforms: input.platforms.filter(plat => plat !== p)
            
        })
    }


 
    return(
        <div className={styles.contenedorFondo}>
            <div className={styles.contenedor}>
                <h1 className={styles.titulo}>AGREGA UN VIDEOJUEGO</h1>

                <form  className={styles.form} onSubmit={(e) =>enviarDatos(e)}>

                    <div className={styles.contInput}>
                        <p>-- Nombre del Videojuego --</p>
                        <input type="text" 
                            value={input.name} 
                            name="name" placeholder="" 
                            onChange={(e)=> capturarInputs(e)} 
                            className={styles.input}>
                        
                        </input>

                        {error.name? <p>{error.name}</p>:null}
                    </div>

                    <div className={styles.contInput}>
                        <p>-- Imagen --</p>
                        <input type="text" 
                            value={input.image} 
                            name="image" placeholder="" 
                            onChange={(e)=> capturarInputs(e)} 
                            className={styles.input}>
                        </input>

                        {error.image? <p>{error.image}</p>:null}
                    </div>

                    <div className={styles.contInput}>
                        <p>-- Descripción Videojuego --</p>
                        <textarea value={input.description}
                            name="description"
                            placeholder="" 
                            onChange={(e)=> capturarInputs(e)} 
                            className={styles.input}>
                        </textarea>

                        {error.description? <p>{error.description}</p>:null}
                    </div>

                    <div className={styles.contInput}>
                        <p>-- Rating -- </p>
                        <input type="number" 
                            value={input.rating} 
                            name="rating" 
                            placeholder="" 
                            step="0.01" min="0" max="5" 
                            onChange={(e)=> capturarInputs(e)}
                            className={styles.input}>
                        </input>

                        {error.rating? <p>{error.rating}</p>:null}
                    </div>

                    <div className={styles.contInput}>
                        <p>-- Fecha de lanzamiento -- </p>
                        <input type="date" 
                            value={input.release_date} 
                            name="release_date"
                            onChange={(e)=> capturarInputs(e)} 
                            className={styles.input}>
                        </input>

                        {error.release_date? <p>{error.release_date}</p>:null}
                    </div>
                    
                    <div className={styles.contInput}>
                        <p>-- Géneros --</p>
                        <select onChange={(e)=> capturarSelectGenres(e)} className={styles.select}> 
                                
                            {
                            allGenres.map(g=>{
                                return(
                                <option value={g.name}>{g.name}</option>                               
                                )
                            })      
                            
                            }
                        </select>
                        {error.genres
                        ? 
                            <p>{error.genres}</p>
                        : 

                            <div>
                                {input.genres.map(g => 
                                    <div>
                                        <p>{ `${g}, `}</p>
                                        <button type="button" onClick={()=>deleteGenres(g)}>x</button>
                                    </div>
                                    )}
                            </div>}
                        
                    </div>


                    <div className={styles.contInput}>
                        <p>-- Plataformas --</p>
                        <select onChange={(e)=> capturarSelectPlatforms(e)} className={styles.select}>
                            {
                                allPlatforms.map(p=>{
                                    return(
                                        <option value={p.name}>{p.name}</option>
                                    )
                                })      
                            }
                        </select>
                        {error.platforms
                        ? 
                            <p>{error.platforms}</p>
                        : 
                            <div>
                                {input.platforms.map(p =>
                                <div> 
                                        <p>{ `${p}, `}</p>
                                        <button type="button" onClick={()=>deletePlatforms(p)}>x</button>
                                </div>
                                
                                )}
                            </div>}
                    
                    </div>

                    <div className={styles.contBtn}>
                        <div className={styles.btnAtras}>
                            <Link to="/home"><BsArrowLeftCircle/></Link>
                        </div>
                        <button type="submit"  className={styles.btnCrear}>Crear</button>
                        
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
}