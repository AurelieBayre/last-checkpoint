import React, { Component } from 'react';
import { connect } from 'react-redux'
import MoviesList from '../components/MoviesList'
import { deleteMovie } from '../actions'

const movies = [
  {
    id: 0,
    text: 'Avalon'
  },
  {
    id: 1,
    text: 'Matrix'
  },
]

const mapStateToProps = state => ({
  movies: state
})

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(deleteMovie(id))
})

class MovieContainer extends Component {

  render() {
    return (
      <div>
        <h1>Coming soon...the list!</h1>
        <MoviesList movies={movies} onClickDelete={this.props.onClickDelete}>
        </MoviesList>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer)