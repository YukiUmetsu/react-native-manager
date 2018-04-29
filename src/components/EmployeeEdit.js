import _ from 'lodash';
import React, { Component } from 'react';
import {Button, Card, CardSection} from "./common";
import {connect} from "react-redux";
import EmployeeForm from "./EmployeeForm";
import {employeeUpdate} from "../actions";

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        })
    }

    onSaveEmployeeChanges(){
        const { name, phone, shift } = this.props;
        console.log({ name, phone, shift });
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
            </Card>
        );
    }
}

const mapStateProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps,{
    employeeUpdate
})(EmployeeEdit);