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
    title: 'Avalon'
  },
  {
    id: 1,
    title: 'Matrix'
  },
  {
    id: 2,
    title: 'Existenz'
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