export const addMovie= (details)=>{
    return {
        type :'ADD_MOVIE',
        payload : details
    }
}

export const deleteMovie = (id) => {
    return {
        type:'DELETE_MOVIE',
        payload: id
    }
}
