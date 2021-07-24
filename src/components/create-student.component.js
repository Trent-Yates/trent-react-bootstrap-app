import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props)

        //setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentStudentno = this.onChangeStudentStudentno. bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Setting Up State
        this.state = {
            name: '',
            email: '',
            studentno: ''

        }
    }

    onChangeStudentName(e) {
        this.setState({name: e.target.value})
    }

    onChangeStudentEmail(e) {
        this.setState({email: e.target.value})
    }
    onChangeStudentStudentno(e) {
        this.setState({studentno: e.target.value})
    }

    onSubmit(e) {
        e.peventDefault()

        console.log(`Student Succesffuly Created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Eamil: ${this.state.email}`);
        console.log(`Student No: ${this.state.studentno}`);

        this.setState({name: '', email: '', studentno: ''})
    }

    render() {
        return (<div class="form-wrapper">
            <Form>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Student No</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">Create Student</Button>
            </Form>
        </div>);
    }
}