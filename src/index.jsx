import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Journal from './components/Journal'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Formulaire from './components/Form'

const root = ReactDOM.createRoot(document.getElementById('root'))
document.title = 'AirBnB-Clone'
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Travel-Journal" element={<Journal />} />
                <Route path="/form" element={<Formulaire />} />
            </Routes>
        </Router>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
