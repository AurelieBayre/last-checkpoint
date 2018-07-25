import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoviesPage from '../components/MoviesPage'
import { deleteMovie, addMovie } from '../actions'


const mapStateToProps = state => ({
  movies: state
})

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(deleteMovie(id)),
  onClickSubmit: movieObj => dispatch(addMovie(movieObj))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage)