import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/main.scss'
import Calculator from '../components/Calculator.jsx'

const App = () => <Calculator />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
