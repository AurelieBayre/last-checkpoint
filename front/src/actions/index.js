let nextMovieId = 0
export const addMovie = text => ({
  type: 'ADD_MOVIE',
  id: nextMovieId++,
  text
})

export const deleteMovie = num => ({
  type: 'DELETE_MOVIE',
  id: num
})

export const test = () => ({
  type: 'TEST'
})