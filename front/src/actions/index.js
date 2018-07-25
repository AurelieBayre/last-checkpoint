let nextMovieId = 0
export const addMovie = title => ({
  type: 'ADD_MOVIE',
  id: nextMovieId++,
  title
})

export const deleteMovie = num => ({
  type: 'DELETE_MOVIE',
  id: num
})

export const test = () => ({
  type: 'TEST'
})