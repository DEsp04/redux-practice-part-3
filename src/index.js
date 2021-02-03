import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
//applyMiddleware for thunk
import { createStore, applyMiddleware } from 'redux';
//Provider will wrapped around App component which will allow its children acces to the store, our global state
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
//allow to use chrome dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import reportWebVitals from './reportWebVitals';



//Redux thunk: Async middleware for redux-using it to make API call and combine it with useEffect

//create a store and do it in one line to avoid error
//create the global state of redux
//rootReducer is a function. Reducer it has to get a state and action. Returns a copy of the entire state


//thunk, a middleware that allows us to make asynchronous actions in Redux. The reason we need it is because asynchronous code can't be passed to reducers or the dispatch method so we use thunk to perform async side effects before calling dispatch
//above the create store is taking in two arguments
//a reducer
// and a enhancer: it is used to specify it to enhance the store
// with third party capabilities such as middleware, time travel, 
//persistence, etc.
// The only store enhancer that ships with redux is applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))





render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
