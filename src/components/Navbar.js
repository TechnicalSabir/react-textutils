import React from 'react'
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

function Navbar(props) {
    let location = useLocation();
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${location.pathname === "/" ? 'active' : ''}`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? 'active' : ''}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className={`form-check form-switch ${props.darkMode === 'light' ? 'text-dark' : 'text-white'}`}>
                            <input className="form-check-input" type="checkbox" id="toggleMode" onClick={props.toggleColorMode} />
                            <label className="form-check-label" htmlFor="toggleMode">{props.darkMode === 'light' ? 'Dark Mode' : 'Light Mode' }</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Navbar"
}

export default Navbar;