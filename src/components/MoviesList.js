import React,{ useState, useEffect }  from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'
import MovieListControl from './MovieListControl';

const MoviesList = (props)=>{
    const movies=useSelector((state)=>{
        return state.movies
    })
    const [ allMovies, setAllMovies ] = useState(movies)

    useEffect(() => {
        setAllMovies(movies)
    }, [movies])

    const handleAllMovies = (value) => {
        setAllMovies(value)
    }

    return (
        <div>
            <MovieListControl movies = {movies} handleAllMovies = {handleAllMovies} allMovies={allMovies}/>
            < ul>
            {
                allMovies.map((movie)=>{
                    return <MovieCard key={movie.id} movie={movie}/>
                })
            }
            </ul>
        </div>
    )

}

export default MoviesList