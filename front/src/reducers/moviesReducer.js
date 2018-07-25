const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ]
    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.id
      )
    case 'TEST':
      console.log('on a test')
      break;
    default:
      return state
  }
}

export default moviesReducer