import React from 'react'
import Movie from './Movie'

const MoviesList = ({ movies, onClickDelete }) => (
  <ul>
    {movies.map((movie, index) => (
      <Movie key={index} {...movie} onClick={() => onClickDelete(index)} />
    ))}
  </ul>
)

export default MoviesList