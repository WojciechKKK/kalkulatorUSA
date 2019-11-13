import React, { Component } from 'react'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import ContactForm from './ContactForm/ContactForm.jsx'
// import InstallInfo from'./InstallInfo/InstallInfo.jsx';
import Information from'./Information/Information.jsx';
import RateInfo from './RateInfo/RateInfo.jsx';
import Copyright from './Copyright/Copyright.jsx';
import SocialMedia from './SocialMedia/SocialMedia.jsx';

import './SideNav.scss'

class SideNav extends Component{
    constructor(){
        super();
        this.state = { 
            showVersion: false,
            // showInstall: false,
            showContact: false,
            showRate: false
        }
    }

    showVersion = () => {
        this.setState({
            showVersion: !this.state.showVersion,
            showInstall: false,
            showContact: false,
            showRate: false
        })
   }

//    showInstall = () => {
//         this.setState({
//             showInstall: !this.state.showInstall,
//             showVersion: false,
//             showContact: false,
//             showRate: false
//         })
//    }
   showContact = () => {
    this.setState({
        showContact: !this.state.showContact,
        showInstall: false,
        showVersion: false,
        showRate: false
        })
    }
    showRate = () => {
        this.setState({
            showRate: !this.state.showRate,
            showContact: false,
            showInstall: false,
            showVersion: false,
            })
    }

    render(){
        const { widthEl, fnCloseNav } = this.props
        const { showVersion, showInstall, showContact, showRate } = this.state
        return(
            <div className="headerInfoDropdown">
                    <ul style={{width: widthEl}} id="mySidenav" className="sidenav">
                        <li className="closebtn" onClick={fnCloseNav}>&times;</li>
                        <li className="version">
                            <a onClick={this.showVersion}>Informacje</a>
                            <SlideDown>
                                {
                                    showVersion
                                    ? <Information  />
                                    : null
                                }
                            </SlideDown>
                        </li>
                        <li className="rate">
                            <a onClick={this.showRate}>Aktualny kurs walut</a>
                            <SlideDown>
                                {
                                    showRate
                                    ? <RateInfo eur={this.props.eur} usd={this.props.usd}/>
                                    : null
                                }
                            </SlideDown>
                        </li>
                        {/* <li className="install">
                            <a onClick={this.showInstall}>Zainstaluj aplikację</a>
                            <SlideDown>
                                {
                                    showInstall
                                    ? <InstallInfo />
                                    : null
                                }
                            </SlideDown>
                        </li> */}
                        <li className="problem">
                            <a onClick={this.showContact}>Zgłoś błąd</a>
                            <SlideDown>
                                {
                                    showContact
                                    ? <ContactForm />
                                    : null
                                }
                            </SlideDown>
                        </li>
                    <SocialMedia />
                    <Copyright />
                    </ul>
                </div>
        )
    }
}
export default SideNav