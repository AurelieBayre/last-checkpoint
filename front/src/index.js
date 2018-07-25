import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import moviesReducer from './reducers/moviesReducer'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = [
  {
    id: 0,
    text: 'Avalon'
  },
  {
    id: 1,
    text: 'Matrix'
  },
  {
    id: 2,
    text: 'Existenz'
  }
]

const store = createStore(moviesReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

console.log('On a etat initial: ', store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)