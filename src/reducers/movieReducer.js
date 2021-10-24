const movieIntialState = []

const movieReducer = (state=movieIntialState,action)=>{
    switch(action.type){
        case 'ADD_MOVIE': {
            console.log(state)
            console.log(action.payload)
            console.log('abc---dd')
            return [...state , {...action.payload}]
        }
        case 'DELETE_MOVIE': {
            return state.filter(ele => ele.id !== action.payload)
        }
        default :{
            return [...state]
        }
    }
}

export default movieReducer