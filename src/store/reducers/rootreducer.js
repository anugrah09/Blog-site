import authreducer from './authreducers';
import projectreducer from './projectreducers';
import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootreducer = combineReducers({
    auth: authreducer,
    project: projectreducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootreducer;