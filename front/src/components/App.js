import React, { Component } from 'react';
import MovieContainer from '../containers/MovieContainer';
import { Container } from 'reactstrap'
import NewMovieForm from './NewMovieForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the last checkpoint</h1>
        </header>
          <Container>
          <p className="App-intro">
            An app based on AlloCiné
          </p>
          <MovieContainer />
          <NewMovieForm />
        </Container>
      </div>
    );
  }
}

export default App;
