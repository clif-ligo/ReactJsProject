import React, {Component} from 'react';
import "./Keypad.css";

class Keypad extends React.Component {
    render(){
        return(
            <div className="Keypad">
                {/* We are using composition instead of inheritance.
                    read more: https://reactjs.org/docs/composition-vs-inheritance.html */}
                {this.props.children}
            </div>
        );
    }
}

export default Keypad;
