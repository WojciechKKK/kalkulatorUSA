import React, { Component } from 'react'
import './Copyright.scss';

class Copyright extends Component{
    constructor(){
        super();
        this.state = {
            textPowered: 'Powered by: ',
            nameCompany: 'TipTopCars',
            copyright: '© 2019 - All Rights Reserved'
        }
    }
    render(){
        const { textPowered, nameCompany, copyright } = this.state
        return(
            <div className="copyrightComp">
                {textPowered} 
                <a href="https://tiptopcars.pl" target="_blank" rel="noopener">
                    {nameCompany}
                </a>
                <p className="copyright">{copyright}</p>
            </div>
        )
    }
}

export default Copyright