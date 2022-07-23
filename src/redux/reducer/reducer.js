
const initialState={
    videogames: [],
    genres:[],
    platforms: [],
    detailVideogame:{},
    allVideogames:[],
    loading: false,
    currentPage: 1

};

function reducer(state = initialState, action){
        switch (action.type) {
            case 'GET_VIDEOGAMES':
               return{
                   ...state,
                   videogames: action.payload,
                   allVideogames: action.payload
               }
            case 'GET_GENRES':
                return{
                    ...state,
                    genres: action.payload
                }

            case 'GET_PLATFORMS':
                return{
                    ...state,
                    platforms: action.payload

                }
            case 'FILTER_GENRE':
                {
                const allVideoGames = state.allVideogames;
                const filterGenre =  action.payload === "Todos" ? allVideoGames
                                    : allVideoGames.filter(v =>v.genres.map(g =>{return g.name}).includes(action.payload)) 
               
                
            return{
                ...state,
                videogames: filterGenre
            }
                }
                
            case 'GET_DETAIL':
                return{
                    ...state,
                    detailVideogame: action.payload
                }


            case'FILTER_DB_API':

            {
                const allVideoGames = state.allVideogames;
                let filterDbApi=[]
                if(action.payload === "todos"){
                  filterDbApi = allVideoGames
                }else if(action.payload === "api"){
                   filterDbApi = allVideoGames.filter(v => v.id.toString().length < 6)
                }else if(action.payload === "creados"){
                    filterDbApi = allVideoGames.filter(v => v.id.toString().length > 6)
                }

                return{
                    ...state,
                    videogames: filterDbApi
                }
            }

            case 'ORDENAR_VIDEOGAMES':
                {
                    let ordenados = action.payload === "AZ" ?
                    state.videogames.sort((a,b) =>{
                        if(a.name > b.name){
                            return 1;
                        }else if(a.name < b.name){
                            return -1;
                        }else{
                            return 0;
                        }
                    }):state.videogames.sort((a,b)=>{
                        if(a.name > b.name){
                            return -1;
                        }else if(a.name < b.name){
                            return 1;
                        }else{
                            return 0;
                        }
                    })

                    return{
                        ...state,
                        videogames:[...ordenados]
                    }

                }

                case 'BUSCAR_VIDEOGAME':
                   { 
                        if(action.payload.msg === "Nombre no encontrado"){
                            action.payload = [];
                        }
                    
                        return{
                            ...state,
                            videogames: action.payload
                        }
                   }

                case 'CREAR_VIDEOGAME':
                    return{
                        ...state,
                    }
            
                case 'DELETE_VIDEOGAME':
                    return{
                        ...state,
                    }
                case 'LOADING':
                    return{
                        ...state,
                        loading:action.payload
                    }
                case 'CURRENT_PAGE':
                    return{
                         ...state,
                        currentPage: action.payload
                    }
                    
        
            default:
                return state;
        }



}

export default reducer;