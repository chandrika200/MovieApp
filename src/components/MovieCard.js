import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteMovie } from '../actions/movieActions'

const MovieCard = (props)=>{
    const {movie} = props
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteMovie(id))
    }

    return (
        <div>
            <h2>{movie.name}</h2>
            <h3>#{movie.rank}</h3>
            <button onClick={()=>handleDelete(movie.id)}>remove</button>
        </div>
    )
}

export default MovieCard