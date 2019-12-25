import React from 'react';

class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.click}>My name is UzanR {this.props.name} and my age is {this.props.age}</div>
        );
    }
}

export default Person;