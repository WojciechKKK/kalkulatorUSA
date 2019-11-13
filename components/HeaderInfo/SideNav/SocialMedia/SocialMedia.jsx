import React, { Component } from 'react'
import './SocialMedia.scss';

class SocialMedia extends Component{
    constructor(){
        super();
        this.state = {
            socialMedia: ['facebook', 'chrome']
        }
    }
    render(){
        const { socialMedia } = this.state
        return(
            <div className="socialMediaComp">
                <ul className="socialList">
                    {
                        socialMedia.map(el => {
                            return <li className="socialEl" key={el}>
                                        <a href={el == 'facebook' ? 'https://www.facebook.com/motorsamerican/': null || el == 'chrome' ? 'https://www.americanmotors.pl/': null } rel="noopener" target="_blank" title={el}>
                                            <i className={`fab fa-${el} social_icon`}></i>
                                        </a>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default SocialMedia