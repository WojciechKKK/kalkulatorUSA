import React, { Component } from 'react'
import './ButtonCalculate.scss'

class ButtonCalculate extends Component{
    constructor(){
        super();
        this.state = {
            btnTextCount: 'Oblicz',
            btnTextDetails: 'Szczegóły'
        }
    }
    setShowResultPrice = () => {
        if(typeof this.props.fnClickShowResultPrice == 'function'){
            this.props.fnClickShowResultPrice();
        }
    }
    setShowHideDetails = () => {
        if(typeof this.props.fnClickDetails == 'function'){
            this.props.fnClickDetails();
           
        }
        if(this.props.showPrice){
        this.setState({
            btnTextDetails: this.state.btnTextDetails == 'Szczegóły' ? 'Ukryj' : 'Szczegóły' 
        })
    }
    }
    render(){
        const { btnTextCount, btnTextDetails } = this.state
        return(
            <div className="buttonCalculateComp">
                <button className="btnShow" onClick={this.setShowResultPrice}>
                    { btnTextCount }
                </button>
                <button className="btnDetails" onClick={this.setShowHideDetails}>
                    { btnTextDetails }
                </button>
            </div>
        )
    }
}

export default ButtonCalculate