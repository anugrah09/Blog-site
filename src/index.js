import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootreducer from './store/reducers/rootreducer'
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import {  reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbconfig.js';
import Loader from './Loader';

const store = createStore(rootreducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore
    )
  );
  if(store.firebaseAuthIsReady){
    store.firebaseAuthIsReady.then(() => {
      ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
      reportWebVitals();
    })
  }else{
    ReactDOM.render(<Loader />, document.getElementById('root'));
    reportWebVitals();
  }
// .catch(()=>{
  
// })
   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
