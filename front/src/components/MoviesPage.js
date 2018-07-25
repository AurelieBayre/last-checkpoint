import React from 'react';
import MoviesList from './MoviesList'
import NewMovieForm from './NewMovieForm'
import { Container } from 'reactstrap'

const MoviesPage = ({ movies, onClickDelete, onClickSubmit }) => (
  <Container>
    <MoviesList movies={movies} onClickDelete={onClickDelete} />
    <NewMovieForm onClickSubmit={onClickSubmit} />
  </Container>
)

export default MoviesPage