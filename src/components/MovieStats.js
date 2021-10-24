import React from 'react'
import {useSelector} from 'react-redux'
import _ from 'lodash'

const MovieStats = (props)=>{
    const movies = useSelector((state)=>{
        return state.movies
    })
    const ranks = movies.map(ele => ele.rank);
    const sorted = ranks.sort((a, b) => b-a);
    const topRankedMovie = _.find(movies,(movie)=>{
        return movie.rank===sorted[0]
    }) 
    //console.log(topRankedMovie)

    return (
        <div>
             <h2>Movie Stats</h2>
             <p>Total Movies - {movies.length}</p>
             {
                movies.length > 0  && <div>
                                  <p>Top Ranked Movie - <em>{topRankedMovie.name}</em> </p>
                                  <p>Ranking - #{topRankedMovie.rank}</p>
                    </div>
             }
        </div>
    )
}

export default MovieStats