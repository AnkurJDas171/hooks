import React, { Component } from 'react';
import Debouncer from '../debouncer';

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            text: "",
            displayText: "",
            count: 0,
            finalValue: 0,
        };
        this.textDebouncer = null;
    }

    handleDisplayTextChange = (value) => {
        this.setState({displayText: value});
    }

    componentDidMount(){
        const {debounceFun} = Debouncer(ClassComponent, this.handleDisplayTextChange, 1000);
        this.textDebouncer = debounceFun;
    }

    handleChange = (event) =>{
        this.setState({ text: event.target.value });
        this.textDebouncer(event.target.value);
    }

    render() {
        return (
            <div>
                <input
                    placeholder='class component'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <p>{this.state.displayText}</p>
            </div>
        );
    }
}

export default ClassComponent;