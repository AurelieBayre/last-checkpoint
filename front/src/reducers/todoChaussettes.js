const todoMovies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id === action.num
      )
    case 'TEST':
      console.log('on a test')
      break;
    default:
      return state
  }
}

export default todoMovies