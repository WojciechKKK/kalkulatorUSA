import React, { Component } from 'react'
import './Transport.scss';

class Transport extends Component{
    constructor(){
        super();
        this.state = {
            portValue: 'Transport',
            containerValue: '',
            portPrice: 0,
            containerPrice: 0,
            portPriceWithCotainer: 0,
            allPort: [
                // New Jersey
               {city: 'kansas', price: 900, port: 'New Jersey'},
               {city: 'nebraska', price: 900, port: 'New Jersey'},
               {city: 'minessota', price: 900, port: 'New Jersey'},
               {city: 'michigan', price: 600, port: 'New Jersey'},
               {city: 'indiana', price: 600, port: 'New Jersey'},
               {city: 'kentucky', price: 600, port: 'New Jersey'},
               {city: 'tenesse', price: 800, port: 'New Jersey'},
               {city: 'floryda', price: 900, port: 'New Jersey'},
               {city: 'dakota poludniowa', price: 900, port: 'New Jersey'},
               {city: 'dakota polnocna', price: 1000, port: 'New Jersey'},
               {city: 'karolina poludniowa', price: 700, port: 'New Jersey'},
               {city: 'karolina polnocna', price: 600, port: 'New Jersey'},
               {city: 'ohio', price: 600, port: 'New Jersey'},
               {city: 'nowy york', price: 400, port: 'New Jersey'},
               {city: 'boston', price: 350, port: 'New Jersey'},
               {city: 'New Hampshire', price: 500, port: 'New Jersey'},
               {city: 'maine', price: 700, port: 'New Jersey'},
               {city: 'maryland', price: 400, port: 'New Jersey'},
               {city: 'waszyngton', price: 500, port: 'New Jersey'},
               {city: 'new Jersey', price: 250, port: 'New Jersey'},
               {city: 'georgia', price: 700, port: 'New Jersey'},
               {city: 'luizjana', price: 800, port: 'New Jersey'},
               {city: 'iowa', price: 900, port: 'New Jersey'},
               {city: 'wisconsin', price: 900, port: 'New Jersey'},
               {city: 'connecticut', price: 350, port: 'New Jersey'},
               {city: 'pensylwania', price: 550, port: 'New Jersey'},
               {city: 'delaware', price: 300, port: 'New Jersey'},
               {city: 'wirginia', price: 500, port: 'New Jersey'},
               {city: 'arkansas', price: 900, port: 'New Jersey'},
               {city: 'missouri', price: 800, port: 'New Jersey'},
                    // Los Angeles
               {city: 'texas', price: 900, port: 'Los Angeles'},
               {city: 'oklahoma', price: 800, port: 'Los Angeles'},
               {city: 'nowy meksyk', price: 800, port: 'Los Angeles'},
               {city: 'kolorado', price: 800, port: 'Los Angeles'},
               {city: 'wyoming', price: 800, port: 'Los Angeles'},
               {city: 'montana', price: 1000, port: 'Los Angeles'},
               {city: 'oregon', price: 1000, port: 'Los Angeles'},
               {city: 'idaho', price: 900, port: 'Los Angeles'},
               {city: 'nevada', price: 700, port: 'Los Angeles'},
               {city: 'utah', price: 800 , port: 'Los Angeles'},
               {city: 'kalifornia', price: 300, port: 'Los Angeles'},
            ]  
        }
    }
    //sort ports
    componentDidMount = () => {
        let allPort = this.state.allPort;
        let finalSort = allPort.sort(function(a,b){
            var x = a.city.toLowerCase();
            var y = b.city.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        this.setState({
            allPort: finalSort
        })
    }
    setHandlePort = (e) => {
        let finalPort = this.state.allPort.filter(el => el.city === e.target.value);
        let priceContainer = finalPort[0].port === 'New Jersey' ? 800 : 1200
        let finalPrice = finalPort[0].price + priceContainer
        if(typeof this.props.fnSetTransport === 'function'){
            this.props.fnSetTransport(e.target.value, finalPort[0].port, finalPort[0].price, priceContainer, finalPrice)
        }
        this.setState({
            portValue: e.target.value,
            containerValue: finalPort[0].port,
            portPrice: finalPort[0].price,
            containerPrice: priceContainer,
            portPriceWithCotainer: finalPrice
        })
    }
    render(){
        const { portValue, allPort } = this.state;
        return(
            <div className="transportComp">
                <div className="transportChoose">
                    <label htmlFor="transportOption">
                        {/* <p className="transportChooset_text">Transport:</p> */}
                    </label>
                        <select id="transportOption" className="transportChoose_option" onChange={this.setHandlePort} value={portValue}>
                            <option value="Transport" hidden disabled>Transport</option>
                                {
                                        allPort.map(el => {
                                        return <option key={el.city} value={el.city}>{el.city}</option>
                                        })
                                }
                        </select>

                </div>
            </div>
        )
    }
}

export default Transport



