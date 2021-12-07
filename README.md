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
            premiereVal:"",
            deuxiemeVal:"",
            operateur: "",
            valueToDisplay:"",
        };
    }

    clear(){
        this.setState({
            premiereVal:"",
            deuxiemeVal:"",
            operateur: "",
            valueToDisplay:"",
        })
    }

    ajouteValue(val){
        if (this.state.operateur === "" ){
        this.setState({premiereVal :this.state.premiereVal + val, valueToDisplay: this.state.premiereVal + val})
        }
        if (this.state.operateur !== "" ){
           this.setState({deuxiemeVal :this.state.deuxiemeVal + val, valueToDisplay: this.state.deuxiemeVal + val})
       }
    }


    ajouteOperation(ope){
        if (this.state.operateur !== ""){
            this.setState({operateur: ope, premiereVal: this.state.valueToDisplay, deuxiemeVal: ""});
        }
        else {
            this.setState({operateur :ope})
        }



    }


    calcul (){
        switch (this.state.operateur){
            case "+" :
                this.setState({valueToDisplay: parseFloat(this.state.premiereVal) + parseFloat(this.state.deuxiemeVal)});
                break;
            case "-" :
                this.setState({valueToDisplay: parseFloat(this.state.premiereVal) - parseFloat(this.state.deuxiemeVal)});
                break;

            case "/" :
                this.setState({valueToDisplay: parseFloat(this.state.premiereVal) / parseFloat(this.state.deuxiemeVal)});
                break;

            case "*" :
                this.setState({valueToDisplay: parseFloat(this.state.premiereVal) * parseFloat(this.state.deuxiemeVal)});
                break;

            default:
                this.setState({valueToDisplay: "erreur"});
                break;
        }


    }

    render() {
        console.log("premiere val : " + this.state.premiereVal);
        console.log("operateur : " + this.state.operateur);
        console.log("deuxieme val : " + this.state.deuxiemeVal);
        console.log("val to display val : " + this.state.valueToDisplay);
        console.log("stop");


        return (
            <div>
                <EcranCalc  valueToDisplay = {this.state.valueToDisplay} />
                <button onClick={() => this.ajouteValue("1")}>1</button>
                <button onClick={() => this.ajouteValue("2")}>2</button>
                <button onClick={() => this.ajouteValue("3")}>3</button>
                <button onClick={() => this.ajouteOperation("+")}>+</button><br />

                <button onClick={()=>this.ajouteValue("4")}>4</button>
                <button onClick={()=>this.ajouteValue("5")}>5</button>
                <button onClick={()=>this.ajouteValue("6")}>6</button>
                <button onClick={()=>this.ajouteOperation("-")}>-</button><br />

                <button onClick={()=>this.ajouteValue("7")}>7</button>
                <button onClick={()=>this.ajouteValue("8")}>8</button>
                <button onClick={()=>this.ajouteValue("9")}>9</button>
                <button onClick={()=>this.ajouteOperation("*")}>*</button><br />

                <button onClick={()=>this.ajouteValue("0")}>0</button>
                <button onClick={()=>this.ajouteValue(".")}>.</button>
                <button onClick={()=>this.ajouteOperation("/")}>/</button>

                <button onClick={()=>this.calcul()}>=</button><br />

                <button onClick={()=>this.clear()}>C</button><br />

            </div>
        )
    }

}

ReactDOM.render(<Calculatrice/>, document.getElementById('root'));




