import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoviesList from '../components/MoviesList'
import { deleteMovie, addMovie } from '../actions'


const mapStateToProps = state => ({
  movies: state
})

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(deleteMovie(id)),
  onSubmitAdd: movieObj => dispatch(addMovie(movieObj))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)