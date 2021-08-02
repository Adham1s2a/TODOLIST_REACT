import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <footer style={{  marginTop: '30px',
            textAlign: 'center'}}>
            <p>Adham Moamer 2021</p>
            <Link to="/About">About</Link>
        </footer>
    )
}

export default Footer
