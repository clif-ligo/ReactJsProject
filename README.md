# ReactJsProject
c'est le repository du projet en react 
 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 


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


class BoutonCalc extends React.Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}>
            </button>
        )
    }

}

class EcranCalc extends React.Component {
    render() {
        return (
            <div>
                {this.props.valueToDisplay}
            </div>

        )
    }
}

class Calculatrice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            premiereVal:null,
            deuxiemeVal:null,
            operateur: "",
            valueToDisplay:0,
        };
    }


    clear(){
        this.setState({
            premiereVal:null,
            deuxiemeVal:null,
            operateur: "",
            valueToDisplay:0,
        })
    }
    ajouteValue(val){
      if (this.state.premiereVal == null){
           this.setState({premiereVal :val, valueToDisplay: val})
       }
       else {
           this.setState({deuxiemeVal :val, valueToDisplay: val})
       }
    }


    ajouteOperation(ope){
        this.setState({operateur :ope})
    }



    calcul (){

        switch (this.state.operateur){
            case "+" :
                this.setState({valueToDisplay: this.state.premiereVal + this.state.deuxiemeVal});
                break;
            case "-" :
                this.setState({valueToDisplay: this.state.premiereVal - this.state.deuxiemeVal});
                break;

            case "/" :
                this.setState({valueToDisplay: this.state.premiereVal / this.state.deuxiemeVal});
                break;

            case "*" :
                this.setState({valueToDisplay: this.state.premiereVal * this.state.deuxiemeVal});
                break;

            default:
                this.setState({valueToDisplay: "return"});
        }

        this.setState({premiereVal:this.state.valueToDisplay});


    }

    render() {
        console.log(this.state.valueToDisplay);
        return (
            <div>
                <EcranCalc  valueToDisplay = {this.state.valueToDisplay} />
                <button onClick={() => this.ajouteValue(1)}>1</button>
                <button onClick={() => this.ajouteValue(2)}>2</button>
                <button onClick={() => this.ajouteValue(3)}>3</button>
                <button onClick={() => this.ajouteOperation("+")}>+</button><br />

                <button onClick={()=>this.ajouteValue(4)}>4</button>
                <button onClick={()=>this.ajouteValue(5)}>5</button>
                <button onClick={()=>this.ajouteValue(6)}>6</button>
                <button onClick={()=>this.ajouteOperation("-")}>-</button><br />

                <button onClick={()=>this.ajouteValue(7)}>7</button>
                <button onClick={()=>this.ajouteValue(8)}>8</button>
                <button onClick={()=>this.ajouteValue(9)}>9</button>
                <button onClick={()=>this.ajouteOperation("*")}>*</button><br />

                <button onClick={()=>this.ajouteValue(0)}>0</button>
                <button onClick={()=>this.ajouteValue(".")}>.</button>
                <button onClick={()=>this.ajouteOperation("/")}>/</button>

                <button onClick={()=>this.calcul()}>=</button><br />

                <button onClick={()=>this.clear()}>C</button><br />


            </div>
        )
    }

}

ReactDOM.render(<Calculatrice/>, document.getElementById('root'));




