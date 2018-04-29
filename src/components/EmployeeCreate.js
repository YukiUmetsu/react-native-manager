import React, { Component } from 'react';
import {Button, Card, CardSection, Input} from "./common";
import {connect} from "react-redux";
import {employeeUpdate, employeeCreate} from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {

    onSaveEmployee(){
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render(){
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onSaveEmployee.bind(this)}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);