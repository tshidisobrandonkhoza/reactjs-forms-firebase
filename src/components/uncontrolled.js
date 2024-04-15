import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }
    handleClick = (event) => {
        event.preventDefault();

        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        }
        console.log(values);
    }

    render() {
        return (
            <div className='container'>

                <form>
                    <div className='form_element'>
                        <label>Enter Name</label>
                        <input
                            type="text"
                            name=''
                            ref={input => this.name = input}
                            value={this.state.name}
                        />
                    </div>
                    <div className='form_element'>
                        <label>Enter LastName</label>
                        <input
                            type="text"
                            name=''

                            ref={input => this.lastname = input}
                            value={this.state.lastname}
                        />
                    </div>
                    <button onClick={this.handleClick}>Submit</button>
                </form>

            </div>
        )
    }
}

export default Uncontrolled;