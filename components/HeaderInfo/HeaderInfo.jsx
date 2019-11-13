import React, { Component } from 'react'
import './HeaderInfo.scss'
import SideNav from './SideNav/SideNav.jsx'

class HeaderInfo extends Component{
    constructor(){
        super();
        this.state = {
            sideNavWidth: '0'
        }
    }
  

    handleShowCloseSideNav = () => {
        this.setState({
            sideNavWidth: this.state.sideNavWidth === '0'? '100%' : '0'
        });
    }
  
    render(){
        const { sideNavWidth } = this.state;
        const { eur, usd } = this.props;
        return(
            <div className="headerInfoComp">
                <div className="headerInfoLogo">
                    <img alt="logo_American_Motors" className="logo" title="American Motors" src="./image/am-logo.jpg" />
                </div>
                <div className="headerInfoIcon">
                    <a href="http://wojciechkkk.pl/americanmotors/">
                        <i className="fas fa-sync-alt" title="Refresh">
                            <i className="iconTitle">odśwież</i>
                        </i>
                    </a> 
                    <i onClick={this.handleShowCloseSideNav} className="fas fa-info-circle" title="Information">
                        <i className="iconTitle">informacje</i>
                    </i>
                </div>
                <SideNav widthEl={sideNavWidth} fnCloseNav={this.handleShowCloseSideNav} eur={eur} usd={usd} />
            </div>
        )
    }
} 

export default HeaderInfo