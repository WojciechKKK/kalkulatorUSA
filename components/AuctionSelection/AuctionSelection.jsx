import React,  { Component } from 'react';
import './AutoSelection.scss'

class AuctionSelection extends Component{
    constructor(){
        super();
        this.state = {
            price: '',           //price from input
            optionValue: 'Wybór aukcji',     // from select
            optionSelect: ['copart', 'iaai'],   //for select
            finalPrice: 0,         //price for auction 
            iaai:[
                { min: 0, max: 99.99, price: 1},
                { min: 100, max: 199.99, price: 40},
                { min: 200, max: 299.99, price: 60},
                { min: 300, max: 349.99, price: 75},
                { min: 350, max: 399.99, price: 90},
                { min: 400, max: 499.99, price: 100},
                { min: 500, max: 599.99, price: 130},
                { min: 600, max: 699.99, price: 145},
                { min: 700, max: 799.99, price: 160},
                { min: 800, max: 899.99, price: 175},
                { min: 900, max: 999.99, price: 190},
                { min: 1000, max: 1099.99, price: 205},
                { min: 1100, max: 1199.99, price: 220},
                { min: 1200, max: 1299.99, price: 230},
                { min: 1300, max: 1399.99, price: 240},
                { min: 1400, max: 1499.99, price: 255},
                { min: 1500, max: 1599.99, price: 270},
                { min: 1600, max: 1699.99, price: 290},
                { min: 1700, max: 1799.99, price: 300},
                { min: 1800, max: 1999.99, price: 310},
                { min: 2000, max: 2199.99, price: 325},
                { min: 2200, max: 2399.99, price: 330},
                { min: 2400, max: 2499.99, price: 345},
                { min: 2500, max: 2999.99, price: 360},
                { min: 3000, max: 3499.99, price: 400},
                { min: 3500, max: 3999.99, price: 450},
                { min: 4000, max: 4499.99, price: 475},
                { min: 4500, max: 4999.99, price: 500},
                { min: 5000, max: 5999.99, price: 525},
                { min: 6000, max: 7499.99, price: 550},
                { min: 7500, max: 19999.99, price: 500},
                { min: 20000, max: 1000000, price: 0}
            ],
            copart:[
                { min: 0, max: 49.99, price: 1},
                { min: 50, max: 99.99, price: 1},
                { min: 100, max: 199.99, price: 25},
                { min: 200, max: 299.99, price: 50},
                { min: 300, max: 349.99, price: 75},
                { min: 350, max: 399.99, price: 75},
                { min: 400, max: 449.99, price: 110},
                { min: 450, max: 499.99, price: 110},
                { min: 500, max: 549.99, price: 125},
                { min: 550, max: 599.99, price: 130},
                { min: 600, max: 699.99, price: 140},
                { min: 700, max: 799.99, price: 155},
                { min: 800, max: 899.99, price: 170},
                { min: 900, max: 999.99, price: 185},
                { min: 1000, max: 1199.99, price: 200},
                { min: 1200, max: 1299.99, price: 225},
                { min: 1300, max: 1399.99, price: 225},
                { min: 1400, max: 1499.99, price: 250},
                { min: 1500, max: 1599.99, price: 250},
                { min: 1600, max: 1699.99, price: 275},
                { min: 1700, max: 1799.99, price: 275},
                { min: 1800, max: 1999.99, price: 300},
                { min: 2000, max: 2399.99, price: 325},
                { min: 2400, max: 2499.99, price: 325},
                { min: 2500, max: 2999.99, price: 350},
                { min: 3000, max: 3499.99, price: 400},
                { min: 3500, max: 3999.99, price: 400},
                { min: 4000, max: 4499.99, price: 400},
                { min: 4500, max: 4999.99, price: 400},
                { min: 5000, max: 5999.99, price: 425},
                { min: 6000, max: 7499.99, price: 425},
                { min: 7500, max: 9999.99, price: 450},
                { min: 10000, max: 14999.99, price: 500},
                { min: 15000, max: 19999.99, price: 550},
                { min: 20000, max: 24999.99, price: 600},
                { min: 25000, max: 29999.99, price: 650},
                { min: 30000, max: 34999.99, price: 700},
                { min: 35000, max: 1000000, price: 0}
            ]
        }
    }

    //set state price
    setInput = (e) => {
        this.setState({
            price: e.target.value,
            finalPrice: 0,
            // optionValue: 'Wybór aukcji'
        })
        //set price in parents
        if(typeof this.props.fnSetPrice === 'function'){
             this.props.fnSetPrice(e.target.value)
        }
    }

    //set option state and set finalPrice and set price in parent's component
    setSelect = (e) => {
        const { copart, iaai, price } = this.state
       
        let choose = e.target.value;
        let priceAuctionObj; // is a object for example { min: 0, max: 99.99, price: 500}
        let priceAuction //final price
        if(choose == 'iaai'){
            priceAuctionObj = iaai.filter(el => el.min <= price && el.max >= price);
            if(price >= 7500 && price <= 19999.99 ) {
                priceAuction = priceAuctionObj[0].price + price*0.1;
            } else if(price >= 20000){
                priceAuction = price*0.4;
            }else{
                priceAuction = priceAuctionObj[0].price;
            }
        } else {
            priceAuctionObj = copart.filter(el => el.min <= price && el.max >= price);
            if(price >= 35000) {
                priceAuction = price*0.2;
            }else{
                priceAuction = priceAuctionObj[0].price;
            }
        }

        this.setState({
            optionValue: e.target.value,
            finalPrice: priceAuction 
        });
        //set choose auction and price in parents
        if(typeof this.props.fnSetAuctionSelection == 'function'){
            this.props.fnSetAuctionSelection(e.target.value, priceAuction )
        }
    }
    render(){
        const { price, optionValue, optionSelect } = this.state;
        return(
            <div className="auctionSelectionComp">
                <div className="auctionSelectionContainer">
                    <div className="auctionSelectionPrice">
                        <label htmlFor="auctionPrice" className="auctionSelectionPrice_label">
                            <input required id="auctionPrice" className="auctionSelectionPrice_input" type="number" onChange={this.setInput} value={price} maxLength={10} placeholder="&nbsp;"></input>
                            <span className="inputText">Cena:</span>
                            <span className="inputBorder"></span>
                        </label>
                    </div>
                    <div className="auctionSelectionChooseComp">
                        <div className="auctionSelectionChoose">
                            <label htmlFor="auctionOption">
                                {/* <p className="auctionSelectionChoose_text">Wybór aukcji:</p> */}
                            </label>
                            <select  required id="auctionOption" className="auctionSelectionChoose_option" onChange={this.setSelect} value={optionValue}>
                                <option value="Wybór aukcji" hidden disabled>Wybór aukcji</option>
                                {
                                    optionSelect.map(el => <option key={el} value={el}>{el}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuctionSelection