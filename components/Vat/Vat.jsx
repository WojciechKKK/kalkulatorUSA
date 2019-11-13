import React, { Component } from 'react'
import './Vat.scss'
class Vat extends Component{
    constructor(){
        super();
        this.state = {
            optionValue: 'Vat',
            vatFinally: 0,
            allCityVat: [
                {city: 'Bremerhaven', vat: 0.19},
                {city: 'Rotterdam ', vat: 0.21}
            ]
        }
    }
    setHandleVat = (e) => {
        let finalEl = this.state.allCityVat.filter(el => el.city === e.target.value);
        let finallyVat = finalEl[0].vat
        
        if(typeof this.props.fnSetVat === 'function'){
            this.props.fnSetVat(e.target.value, finallyVat)
        }
        this.setState({
            optionValue: e.target.value,
            vatFinally: finallyVat
        })
    } 
    render(){
        const { optionValue, allCityVat } = this.state
        return(
            <div className="vatComp">
                <div className="vatChoose">
                    <label htmlFor="vatOption">
                        {/* <p className="vatChoose_text">
                            Vat:
                        </p> */}
                    </label>
                    <select id="vatOption" className="vatChoose_option" onChange={this.setHandleVat} value={optionValue}>
                        <option value='Vat' hidden disabled>Odprawa celna</option>
                        {
                            allCityVat.map(el => <option key={el.city} value={el.city}>{el.city}</option>)
                        }
                    </select>

                </div>
            </div>
        )
    }
}

export default Vat