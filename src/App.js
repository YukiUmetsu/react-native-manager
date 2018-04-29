import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import firebase from 'firebase';
import firebaseConfig from './config/dev';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}
