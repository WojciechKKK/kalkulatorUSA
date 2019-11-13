import React, { Component } from 'react'
import './Finally.scss'
import SlideDown from 'react-slidedown';

class Finally extends Component{
    constructor(){
        super();
    }

    render(){
        const { price,auctionFinallyPrice,transportPort,transportContainer,transportPortPrice,transportContainerPrice,transportfinallyPrice,
            vatCity,vatFinally,valueClo,internetFeeBuyers,LoadingDispatchOfDocuments,LoadingInGermanyNetherlands,transportPoland,americanMotors, usdRate, showDetails } = this.props

        let clo = (Number(price) + Number(LoadingInGermanyNetherlands)) * valueClo;
        let transportToPoland = (transportPoland / usdRate).toFixed(2);
        let commisionToMotors = (americanMotors / usdRate).toFixed(2);

        let sum = (Number(price) + Number(auctionFinallyPrice) + Number(internetFeeBuyers) +  Number(LoadingDispatchOfDocuments) + Number(transportfinallyPrice) + Number(LoadingInGermanyNetherlands) + Number(clo));
        let vat = sum * vatFinally;
        let result = sum + vat + Number(transportToPoland) + Number(commisionToMotors);
        return(
            <div className="finallyComp">
                <p className="finallySum">Razem: <a>{(result * usdRate).toFixed()}</a> zł</p>
                <SlideDown>
                        {
                            ! showDetails
                            ? null
                            : <table className="finallyTable">
                                <thead>
                                    <tr className="info">
                                        <th className="tableHeader">składnik</th>
                                        <th className="tableHeader">cena $</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cena: </td>
                                        <td>{price}</td>
                                    </tr>
                                    <tr>
                                        <td>Cena aukcji: </td>
                                        <td>{auctionFinallyPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Port: {transportPort}, cena: {transportPortPrice}<br />
                                            Kontener: {transportContainer}, cena {transportContainerPrice}
                                        </td>
                                        <td>{transportfinallyPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Vat: {vatCity}, {vatFinally}</td>
                                        <td>{vat.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cło:</td>
                                        <td>{clo.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Oplata za licytacje interentową: </td>
                                        <td>{internetFeeBuyers}</td>
                                    </tr>
                                    <tr>
                                        <td>Rozladunek + obsluga celna </td>
                                        <td>{LoadingInGermanyNetherlands}</td>
                                    </tr>
                                    <tr>
                                        <td>Załadunek, odprawa, wysylka : </td>
                                        <td>{LoadingDispatchOfDocuments}</td>
                                    </tr>
                                    <tr>
                                        <td>Transport do Polski:</td>
                                        <td>{transportToPoland}</td>
                                    </tr>
                                    <tr>
                                        <td>Prowizja American Motors:</td>
                                        <td>{commisionToMotors}</td>
                                    </tr>
                                </tbody>
                            </table>
                        }    
                </SlideDown>
            </div>
        )
    }
}

export default Finally