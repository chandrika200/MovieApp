import React  from 'react'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'


const MovieContainer = (props)=>{

    return (
        <div>
            <MoviesList />
            <MovieForm />
            <MovieStats />
        </div>
    )
}

export default MovieContainer