import React ,{useState , useEffect} from 'react'
import _ from 'lodash'


const MovieListControl = (props)=>{
    const { handleAllMovies, movies, allMovies } = props

    // state variable to control form input
    const [ search, setSearch ] = useState('')
    const [ sortBy, setSortBy ] = useState('')

    useEffect(() => {
        setSearch('')
        setSortBy('')
    }, [movies])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const newMovies = movies.filter(ele => ele.name.toLowerCase().includes(e.target.value.toLowerCase()))
        handleAllMovies(newMovies)
    }

    const sorting = (value) => {
        switch (value) {
            case 'alphaAsc':
                return _.sortBy(allMovies,'movie') // A -z
            case 'alphaDesc':
                return _.sortBy(allMovies,'movie').reverse() // Z -A
            case 'ratingAsc':
                return _.sortBy(allMovies,'rating') 
            case 'ratingDesc':
                return _.sortBy(allMovies,'rating').reverse() 
            default:
                return _.sortBy(allMovies,'id').reverse()
        }
    }

    const handleSort = (e) => {
        setSortBy(e.target.value)
        const newMovies = sorting(e.target.value)
        handleAllMovies(newMovies)
    }


    return (
        <div>
            <form>
                <input type="text" value={search} onChange={handleSearch} placeholder="Search movie" />
                <label>Sort By</label>
                <select  value={sortBy} onChange={handleSort}>
                    <option value=''>None</option>
                    <option value={'alphaAsc'}>A - Z</option>
                    <option value={'alphaDesc'}>Z - A</option>
                    <option value={'ratingAsc'}>1 - 10</option>
                    <option value={'ratingDesc'}>10 - 1</option>
                </select>
            </form>
        </div>
    )
}

export default MovieListControl