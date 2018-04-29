import _ from 'lodash';
import React, { Component } from 'react';
import Communications from "react-native-communications";
import {Button, Card, CardSection} from "./common";
import {connect} from "react-redux";
import EmployeeForm from "./EmployeeForm";
import {employeeUpdate, employeeSave} from "../actions";

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        })
    }

    onSaveEmployeeChanges(){
        const { name, phone, shift } = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress(){
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    render(){
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onSaveEmployeeChanges.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps,{
    employeeUpdate, employeeSave
})(EmployeeEdit);