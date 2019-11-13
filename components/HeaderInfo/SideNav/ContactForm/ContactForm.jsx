import React, { Component } from 'react'
import './ContactForm.scss'

class ContactForm extends Component{
    constructor(){
        super();
        this.state = {
            inputVal: '',
            emailVal: '',
            textAreaVal: '',
        }
    }
    setHandleInput = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }
    setHandleEmail = (e) => {
        this.setState({
            emailVal: e.target.value
        })
    }
    setHandleTextArea= (e) => {
         this.setState({
             textAreaVal: e.target.value
         })
    }

    render(){
        const { inputVal, emailVal, textAreaVal } = this.state
        return(
            <div className="problemText">
                <form action="https://formspree.io/wojte_kk@wp.pl" method="POST">
                    <label htmlFor="nameVal" className="nameLabel">
                    <i className="fas fa-user"></i>
                        <input 
                            id="nameVal"
                            type="text"
                            value={inputVal} 
                            onChange={this.setHandleInput}  
                            placeholder="Imię*"  
                            required="required"
                            maxLength={20}
                            minLength={3} />
                    </label>
                    <label htmlFor="emailVal" className="emailLabel">
                    <i className="fas fa-envelope"></i>
                        <input 
                            id="emailVal"
                            type="email"
                            value={emailVal} 
                            onChange={this.setHandleEmail}  
                            placeholder="Email*"  
                            required="required"
                            maxLength={20}
                            minLength={3} />
                    </label>

                    <label htmlFor="infoVal" className="textAreaLabel">
                    <i className="fas fa-comment"></i>
                        <textarea 
                            id="infoVal"
                            value={textAreaVal}
                            placeholder="Wpisz swój komentarz*"
                            maxLength={200}
                            minLength={3}
                            required="required"
                            onChange={this.setHandleTextArea}>
                        </textarea>
                    </label>
                    <button className="problemTextBtn" type="submit">Wyślij</button>
                </form>
            </div>
        )
    }
}

export default ContactForm