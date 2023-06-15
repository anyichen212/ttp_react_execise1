import React, {Component, ReactPropTypes} from "react";

class ContactCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Name',
            mobileNumber: '555-555-5555',
            workPhone: '123-456-7890',
            email: 'google@google.com',
            inputter: "",
        };
        console.log('constructor run');
        this.handleInputterChange = this.handleInputterChange.bind(this);
    }

    componentDidMount(){
        console.log('COMPONENT DID MOUNT');
    }

    handleInputterChange(event){
        this.setState({
            inputter: event.target.value,
        });
        console.log(this.state.inputter);
    }

    render(){
        console.log('RENDER');
        return (
            <div>
                <div>
                    <h1>Contact Name : {this.state.name}</h1>
                    <h2>Mobile Phone : {this.state.mobileNumber}</h2>
                    <h2>Work Phone : {this.state.workPhone}</h2>
                    <h2>Email : {this.state.email}</h2>
                </div>
                <input onChange={this.handleInputterChange} defaultValue={this.state.inputter}></input>
            </div>

        )
    }
}

export default ContactCard;

/*
Components takes:
contact name
mobule number
work phone
email
Display in a visually appealing way
*/