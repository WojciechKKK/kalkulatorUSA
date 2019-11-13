import React, { Component } from 'react'
import './InstallInfo.scss';

class InstallInfo extends Component{
    constructor(){
        super();
        this.state = {
            text: [
                "Aby zainstalować aplikację należy z poziomu przegladarki wybrać odpowiednie opcję: ",
                "Mobile: 'Dodaj Do ekranu pocztkowego'",
                "Desktop: 'Zainstaluj aplikację kalkulator'",
                "Po wybraniu powyższych opcji zostanie dodana ikona aplikacji na pulpicie naszego urzadzenia",
                "Po wybraniu powyższych opcji zostanie dodana ikona aplikacji na pulpicie naszego urzadzenia"
            ]
        }
    }
    render(){
        const { text } = this.state
        return(
            <div className="installText">
                {
                    text.map(el => <p className="installTextEl">{el}</p>)
                }
            </div>
        )
    }
}

export default InstallInfo