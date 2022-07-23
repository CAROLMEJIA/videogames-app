import axios from 'axios';



export const loading = (value) =>{
    
    return{
        type: 'LOADING',
        payload:value
    }
}

export const getVideogames = () =>{
    return async function(dispatch){
        dispatch(loading(true))
         return fetch(`${process.env.REACT_APP_URLBACK}/videogames`)
        .then(r=>r.json())
        .then(data =>{
            dispatch(loading(false))
            return dispatch({
                type: 'GET_VIDEOGAMES',
                payload:data
            })
        })
        
    }
}

export const getGenres = () =>{
    return async function(dispatch){
        return fetch(`${process.env.REACT_APP_URLBACK}/genres`)
        .then(r => r.json())
        .then(data =>{
            return dispatch({
                type: 'GET_GENRES',
                payload: data
            })
        })
    }
}

export const getPlatforms = () =>{
    return async function(dispatch){
        return fetch(`${process.env.REACT_APP_URLBACK}/platforms`)
        .then(r => r.json())
        .then(data =>{
            return dispatch({
                type: 'GET_PLATFORMS',
                payload: data
            }

            )
        })
    }
}

export function filterGenres(genre){
    
    return{
        type: 'FILTER_GENRE',
        payload: genre

    }
    
}

export function detailVideogame(idVideogame){

    return async function(dispatch){
        dispatch(loading(true))
        return fetch(`${process.env.REACT_APP_URLBACK}/videogame/${idVideogame}`)
        .then(r => r.json())
        .then(data =>{
            dispatch(loading(false))
            return dispatch({
                type: 'GET_DETAIL',
                payload: data
            })
        })
    }

}

export function filterVideogamesDbApi(value){

    return {
        type: 'FILTER_DB_API',
        payload: value
    }

}

export function ordenarVideogames(value){
    return{
        type: 'ORDENAR_VIDEOGAMES',
        payload: value
    }
}

export function buscarVideogame(name){
    
    return async function(dispatch){
        dispatch(loading(true));
        return fetch(`${process.env.REACT_APP_URLBACK}/videogames?name=${name}`)
        .then(r => r.json())
        .then(data =>{
            dispatch(loading(false));
            return dispatch({
                type: 'BUSCAR_VIDEOGAME',
                payload: data
            })
        })
    }

}

export function postVideogame(info){
    return async function(dispatch){
       
       let data = await axios.post(`${process.env.REACT_APP_URLBACK}/videogame`, info)
       return dispatch({
        type: 'CREAR_VIDEOGAME',
        payload: data
    })
    }
}

export function deleteVideogame(idVideogame){
   
    return async function(dispatch){
        let data = await axios.delete(`${process.env.REACT_APP_URLBACK}/${idVideogame}`) 
        return dispatch({
            type: 'DELETE_VIDEOGAME',
            payload: data
        })
    }
}

export function currentPage(value){
    return{
        type: "CURRENT_PAGE",
        payload: value
    }
}