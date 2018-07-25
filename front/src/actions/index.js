let nextMovieId = 2 //(because we have 3 movies in the initial stte, index 0, 1 and 2)

export const addMovie = title => {
  nextMovieId ++
  return {
  type: 'ADD_MOVIE',
  id: nextMovieId,
  title: title+nextMovieId
  }
}

export const deleteMovie = num => ({
  type: 'DELETE_MOVIE',
  id: num
})

export const test = () => ({
  type: 'TEST'
})