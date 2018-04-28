import React, { Component } from 'react';
import {Button, Card, CardSection } from "../components/common";
import { Input } from "../components/common/Input";
import { emailChanged } from "../actions";
import {connect} from "react-redux";

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input label="Email"
                           placeHolder="email@gmail.com"
                           onChangeText={this.onEmailChange.bind(this)}
                           value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input secureTextEntry label="password" placeholder="password" />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);