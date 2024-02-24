import { createContext, useState } from "react";


const MoviesContext =  createContext()

function MoviesProvider ({children}){
    const [movies, setMovies] = useState([])

    return <MoviesContext.Provider value={{movies, setMovies}}>{children}</MoviesContext.Provider>
}

export {MoviesContext, MoviesProvider}