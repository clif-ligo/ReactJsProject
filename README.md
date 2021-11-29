# ReactJsProject
c'est le repository du projet en react 
 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 



//index.js 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


class BoutonCalc extends React.Component {


    render() {
        return (
            <button></button>
        )
    }

}

class EcranCalc extends React.Component {
    render() {
        return <input/>
    }


}

class Calculatrice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valeuraffiche: '0',
            operateur: null,
        };
    }


    clear(){
        this.setState({
            displayvalue:'0',
            operateur: null,
        })
    }

    ajouteValue(val){
        this.setState({displayvalue:val});
        alert(this.state.displayvalue);
    }

    ajouteOperation(){

    }

    calcul(){

    }

    render() {
        return (
            <div>
                <EcranCalc>1</EcranCalc><br/>
                <button valeur="1" onClick={()=>this.ajouteValue(1)}>1</button>
                <button valeur="2" onClick={()=>this.ajouteValue(2)}>2</button>
                <button valeur="3" onClick={()=>this.ajouteValue(3)}>3</button>
                <button valeur="+" onClick={()=>this.ajouteOperation()}>+</button><br />

                <button valeur="4" onClick={()=>this.ajouteValue(4)}>4</button>
                <button valeur="5" onClick={()=>this.ajouteValue(5)}>5</button>
                <button valeur="6" onClick={()=>this.ajouteValue(6)}>6</button>
                <button valeur="-" onClick={()=>this.ajouteOperation()}>-</button><br />

                <button valeur="7" onClick={()=>this.ajouteValue(7)}>7</button>
                <button valeur="8" onClick={()=>this.ajouteValue(8)}>8</button>
                <button valeur="9" onClick={()=>this.ajouteValue(9)}>9</button>
                <button valeur="*" onClick={()=>this.ajouteOperation()}>*</button><br />

                <button valeur="0" onClick={()=>this.ajouteValue(0)}>0</button>
                <button valeur="." onClick={()=>this.ajouteValue()}>.</button>
                <button valeur="/" onClick={()=>this.ajouteOperation()}>/</button>
                <button valeur="=" onClick={()=>this.calcul()}>=</button><br />

                <button valeur="C" onClick={()=>this.clear()}>C</button><br />


            </div>
        )
    }

}

ReactDOM.render(<Calculatrice/>, document.getElementById('root'));

