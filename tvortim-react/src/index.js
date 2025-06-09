import React from "react"
import * as ReactDOMClient from "react-dom/client"

//import components
import App from './App'

//import styles
import './css/bootstrap.min.css'
import './css/main.css'
import './css/index_style.css'
import './css/person.css'


const wrapper = ReactDOMClient.createRoot(document.getElementById('wrapper'))

wrapper.render(<App/>)