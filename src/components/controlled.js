import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        console.log(this.state);
    }

    render() {
        // console.log(this.state.name)
        // console.log(this.state.lastname)
        return (
            <div className='container'>

                <form onSubmit={this.submitForm}>
                    <div className='form_element'>
                        <label>Enter Name</label>
                        <input
                            type="text"
                            name=''
                            onChange={this.handleChangeName}
                            value={this.state.name}
                        />
                    </div>
                    <div className='form_element'>
                        <label>Enter LastName</label>
                        <input
                            type="text"
                            name=''

                            onChange={this.handleChangeLastName}
                            value={this.state.lastname}
                        />
                    </div>
                    <button type='submit'> Submit</button>
                </form>

            </div>
        )
    }
}

export default Controlled;