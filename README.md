# ReactJsProject
c'est le repository du projet en react 
 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 


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


class BoutonCalc extends React.Component {


    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.label}
            </button>
        )
    }

}

class EcranCalc extends React.Component {
    render() {
        return (
            <div>
                {this.props.displayvalue}
            </div>

        )
    }


}

class Calculatrice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayvalue: 0,
            operateur: null,
            premiereVal:"",
            deuxiemeVal:"",
            result:"",
        };
    }


    clear(){
        this.setState({
            displayvalue:0,
            operateur: null,
            result:""
        })
    }
    //parsefloat
    ajouteValue(val){
       if premiereVal ===""
           else
    }

    ajouteOperation(oper){
        this.setState({operateur:oper});
    }

    calcul (){
        const resultat = this.state.premiereVal+this.state.operateur+this.state.deuxiemeVal;
        this.setState({result:resultat})

    }

    render() {
        console.log(this.state.result);
        return (
            <div>
                <div>  {this.state.result} </div>
                <button onClick={()=>this.ajouteValue(1)}>1</button>
                <button onClick={()=>this.ajouteValue(2)}>2</button>
                <button onClick={()=>this.ajouteValue(3)}>3</button>
                <button onClick={()=>this.ajouteOperation("+")}>+</button><br />

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



//trouver un moyen d'avoir une valeur, qui est initialiser au premier clique
//initialiser la valeur de opération
//initialiser la deuxieme valeur
//calculer en fonction de operation
//mettre le resulat dans result ou display operation
//l'afficher dans la div
