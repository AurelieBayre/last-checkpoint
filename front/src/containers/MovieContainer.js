import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoviesList from '../components/MoviesList'
import { deleteMovie } from '../actions'


const mapStateToProps = state => ({
  movies: state
})

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(deleteMovie(id))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)