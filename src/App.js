import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import firebaseConfig from './config/dev';
import reducers from './reducers';
import LoginForm from "./auth/LoginForm";
import {Header} from "./components/common";

export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render(){
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText={'Header'}/>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}
