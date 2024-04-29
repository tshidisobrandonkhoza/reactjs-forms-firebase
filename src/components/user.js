import React, { Component } from 'react';
import FormFields from '../Widgets/Forms/FormFields';
import { firebaseDb } from '../firebase';
import { ref, set, push } from "firebase/database";
class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                    minLen: 3
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'LastName',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message_input',
                    placeholder: 'Enter your message',
                    row: 4,
                    cols: 36
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage: ''
            },
            age: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Age',
                config: {
                    name: 'age_input',
                    options: [
                        { val: '1', text: '10-19' },
                        { val: '2', text: '20-26' },
                        { val: '3', text: '26-32' },
                    ]
                },
                validation: {
                    required: false
                },
                valid: true
            }
        }
    }


    updateForm = (newState) => {
        //  console.log(newState)

        this.setState({
            formData: newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {}

        let formIsValid = true;

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }


        for (let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid
            console.log(this.state.formData[key].valid)
        }

        if (formIsValid) {
            // console.log(dataToSubmit) 

            let snapDataKey = push(ref(firebaseDb), {
                ...dataToSubmit
            }).key;

            console.log(snapDataKey)
        } else {
            console.log('not validated')
        }


        //  axios.post(url, dataToSubmit)
    }

    render() {
        return (
            <div className='container'>


                <form onSubmit={this.submitForm}>
                    <div></div>
                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)} npm install firebase
                        change={(newState) => this.updateForm(newState)}
                    ></FormFields>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default User;