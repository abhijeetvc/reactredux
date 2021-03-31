import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import reducer from './reducer'
import {createStore} from 'redux'

const store=createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  
  ,
  document.getElementById('root')
);

// two types of components:
// a) Smart Components: Those components which are connected with store 
// b) Dumb Components: Those components which are not connected to store