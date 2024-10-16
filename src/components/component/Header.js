import React from "react"
import logo from '../media/logo.png';
import '../desgin/Header.css';
import { Link } from "react-router-dom";




const Header = () => {
    return (
        <>
            <div className="row">
                <img id='logo' className='col-1  ms-2' src={logo}></img>
                <p id='title' className="col-10 mt-2  text text-start">
                    <Link to="/atlin" id='head'>Atlin</Link>
                    <Link to="/" id='Home'>Home</Link>
                    <Link to="/Service" id='Service'>Service</Link>
                    <Link to="/About" id='About'>About us</Link>
                    <Link to="/Contact" id='Contact'>Contact Us</Link>
                </p>
            </div>
        </>
    )
};
export default Header;