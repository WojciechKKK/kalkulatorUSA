import React, { Component } from 'react';
import './RateInfo.scss';

class RateInfo extends Component{
    render(){
        const { usd, eur} = this.props
        return(
            <div className="rateInfoComp">
                <a className="rateInfo">
                    <i className="fas fa-dollar-sign"></i> 
                    <i className="rateValue">{usd}</i>
                </a>
                <a className="rateInfo">
                    <i className="fas fa-euro-sign"></i>
                    <i className="rateValue">{eur}</i>
                </a>
            </div>
        )
    }
}

export default RateInfo