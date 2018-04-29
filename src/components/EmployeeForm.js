import React, { Component } from 'react';
import {View, Text, Picker} from 'react-native';
import {CardSection, Input} from "./common";
import {connect} from "react-redux";
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component {

    renderShiftPicker() {
        const shifts = [
            {label: 'Monday', value: 'Monday'},
            {label: 'Tuesday', value: 'Tuesday'},
            {label: 'Wednesday', value: 'Wednesday'},
            {label: 'Thursday', value: 'Thursday'},
            {label: 'Friday', value: 'Friday'},
            {label: 'Saturday', value: 'Saturday'},
            {label: 'Sunday', value: 'Sunday'},
        ];
        const pickerItems = shifts.map(shift => {
            return (<Picker.Item key={shift.value} label={shift.label} value={shift.value} />);
        });

        return (
            <Picker
                selectedValue={this.props.shift}
                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
            >{pickerItems}</Picker>
        );
    };

    render(){
        return (
            <View>
                <CardSection>
                    <Input label="Name"
                           placeHolder="name"
                           onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
                           value={this.props.name}/>
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection style={{flexDirection:'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    {this.renderShiftPicker()}
                </CardSection>

            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);