import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoChaussettes from './reducers/todoChaussettes'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(todoChaussettes, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)