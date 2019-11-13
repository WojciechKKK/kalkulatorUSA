import React, { Component } from 'react'

// import styled from 'styled-components'
import '../styles/main.scss'
import'./Calculator.scss';

import HeaderInfo from './HeaderInfo/HeaderInfo.jsx'
import AuctionSelection from './AuctionSelection/AuctionSelection.jsx'
import Transport from './Transport/Transport.jsx'
import Vat from './Vat/Vat.jsx'
import ButtonCalculate from './ButtonCalculate/ButtonCalculate.jsx'
import Finally from './Finally/Finally.jsx'

class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            // AuctionSelection
            price: 0,                               //$
            auctionSelection: '',
            auctionFinallyPrice: 0,                 //$
            // Transport
            transportPort: '',
            transportContainer: '',
            transportPortPrice: 0,
            transportContainerPrice: 0,
            transportfinallyPrice: 0,               //$
            //Vat
            vatCity: '',
            vatFinally: 0,                          //number
            
            //Clo
            valueClo: 0.1,

            internetFeeBuyers: 80,
            LoadingDispatchOfDocuments: 300,
            LoadingInGermanyNetherlands: 550,       //$
            transportPoland: 1500,                  //zł
            americanMotors: 2000,                    //zł

            showResultPrice: false,
            showDetails: false,
            usdRate: 3.8,
            eurRate: 4.2,
        }
    }
    componentDidMount = () => {
        // !! This request has been blocked; the content must be served over HTTPS. - PWA !!
        // const addressUrlUSD = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
        // const addressUrlEUR = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/';
        // this.getUsdRate(addressUrlUSD);
        // this.getEurRate(addressUrlEUR);

        // if you want use fetch = change webpack.config:
        // " module.exports = {
        //     entry: ['babel-polyfill', './js/app.jsx'], "
        // const addressURL = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/';
        // fetch(addressURL)
        //     .then(resp => resp.json())
        //     .then(data => this.props.fnSetRate((data.rates[0].mid).toFixed(2)))
        //     .catch(err => console.log(err))
    }

    //get USD from api = http
    getUsdRate = async (address) => {
        try{
            const resp = await fetch(address);
            const data = await resp.json();
            const finalData = await (data.rates[0].mid).toFixed(2);
            const setData = await this.setState({ usdRate: finalData });
        } catch(err){
            console.log(err)
        }
    }
    //get EUR from api = http
    getEurRate = async (address) => {
        try{
            const resp = await fetch(address);
            const data = await resp.json();
            const finalData = await (data.rates[0].mid).toFixed(2);
            const setData = await this.setState({ eurRate: finalData });
        } catch(err){
            console.log(err)
        }
    }

    setHandlePrice = (num) => {
        this.setState({
            price: num
        })
    }
    setHandleAuctionSelection = (text, price) => {
        this.setState({
            auctionSelection: text,
            auctionFinallyPrice: price
        })
    } 
    setHandleTransport = (portValue, containerValue, portPrice, containerPrice,  finallyPrice) => {
        this.setState({
            transportPort: portValue,
            transportContainer: containerValue,
            transportPortPrice: portPrice,
            transportContainerPrice: containerPrice,
            transportfinallyPrice: finallyPrice
        })
    }
    setHandleVat = (text,vat) => {
        this.setState({
            vatCity: text,
            vatFinally: vat
        })
    }
    showResultPrice = () => {
        //TODO add validation
        const { auctionSelection, transportPort, vatCity } = this.state
        if(!auctionSelection || !transportPort || !vatCity){
            alert('Uzupełnij dane')
        } else {
        this.setState({
            showResultPrice: true
        })
        }
    }
    showDetails = () => {
        if(this.state.showResultPrice){
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    }
    render(){
        const { showResultPrice, price,auctionFinallyPrice,transportPort,transportContainer,transportPortPrice,transportContainerPrice,transportfinallyPrice,
            vatCity,vatFinally,valueClo,internetFeeBuyers,LoadingDispatchOfDocuments,LoadingInGermanyNetherlands,transportPoland,americanMotors, usdRate, eurRate, showDetails } = this.state
        return(
            <div className="calculatorBody">
                <HeaderInfo eur={eurRate} usd={usdRate}/>
                <div className="calculatorContainer">
                <AuctionSelection fnSetPrice={this.setHandlePrice} fnSetAuctionSelection={this.setHandleAuctionSelection} />
                <Transport fnSetTransport={this.setHandleTransport} />
                <Vat fnSetVat={this.setHandleVat} />
                <ButtonCalculate fnClickShowResultPrice={this.showResultPrice} fnClickDetails={this.showDetails} showPrice={showResultPrice}/>
                {
                    !showResultPrice 
                    ? null
                    : <Finally 
                        price={price}
                        auctionFinallyPrice={auctionFinallyPrice}
                        transportPort={transportPort}
                        transportContainer={transportContainer}
                        transportPortPrice={transportPortPrice}
                        transportContainerPrice={transportContainerPrice}
                        transportfinallyPrice={transportfinallyPrice}
                        vatCity={vatCity}
                        vatFinally={vatFinally}
                        valueClo={valueClo}
                        internetFeeBuyers={internetFeeBuyers}
                        LoadingDispatchOfDocuments={LoadingDispatchOfDocuments}
                        LoadingInGermanyNetherlands={LoadingInGermanyNetherlands}
                        transportPoland={transportPoland}
                        americanMotors={americanMotors}
                        usdRate={usdRate}
                        showDetails={showDetails}
                    />
                }
                </div>
            </div>
        )
    }
}

export default Calculator