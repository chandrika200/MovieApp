import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMovie} from '../actions/movieActions'

const MovieForm = (props)=>{
    const dispatch = useDispatch()
    const [movie , setMovie] = useState('')
    const [ranking , setRanking] = useState('')


    const handleChange = (e)=>{
        if(e.target.name==='movie'){
            setMovie(e.target.value)
        }else if(e.target.name==='rank'){
            setRanking(e.target.value)
        }
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        const movieDetails = {
            id : Number(new Date()),
            name : movie,
            rank : Number(ranking)
        }
        //console.log(movieDetails)
        dispatch(addMovie(movieDetails))
        setMovie('')
        setRanking('')
    }
    
    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={movie} onChange={handleChange} name="movie" placeholder="Enter movie name" required/><br/>
                <input type="number" value={ranking} onChange={handleChange} name="rank" placeholder="IMDB Ranking" required/><br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export  default MovieForm