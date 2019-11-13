import React, { Component } from 'react'
import './Information.scss'

class Information extends Component{
    constructor(){
        super();
        this.state = {
            versionName: 'loading ...',
            versionData: 'loading ...',
            // versionInfo: ['loading...']
        }
    }
    componentDidMount = async () => {
        // try{
        //     const resp = await fetch('https://wojciechkkk.pl/americanmotors/data/version_info.json');
  
        //     const data = await resp.json();
        //     console.log(data)
        //     console.log(data.version)
        //     const lastData = await data[data.length-1];
        //     await this.setState({
        //         versionName: lastData.name,
        //         versionData: lastData.date
        //         // versionInfo: lastData.info
        //     })
        // }catch(err){
        //     console.log(err)
        // }

        fetch('https://wojciechkkk.pl/americanmotors/data/version_info.json')
        .then(resp => resp.json())
        .then(data => {
            let lastData = data.version[data.version.length-1];
            // console.log(lastData);
            this.setState({
                         versionName: lastData.name,
                         versionData: lastData.date
                        // versionInfo: lastData.info
                    })
        })
    }

    render(){
        const { versionName, versionData } = this.state;
        return(
            <div className="informationComp">
                <ul className="informationList">
                    <li className="infoEl">Version: {versionName}</li>
                    <li className="infoEl">Data aktualizacji: {versionData}</li>
                    {/* <li className="infoEl">Instalacja aplikacji:
                        <ul className="installDevice">
                            <li className="installDeviceEl">Mobile: 'Dodaj Do ekranu pocztkowego'</li>
                            <li className="installDeviceEl">Desktop: 'Zainstaluj aplikację kalkulator'</li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Information