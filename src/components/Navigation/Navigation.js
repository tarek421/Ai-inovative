import React from 'react';
import './Navigation.css';
import logo from '../../image/Logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    // When the user scrolls down 200px from the top of the document, slide down the navbar
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            document.getElementById("navbar").style.top = "0";
            document.getElementById("navbar").style.background = "#0d0b2a";
        } else {
            document.getElementById("navbar").style.top = "transparent";
            document.getElementById("navbar").style.background = "transparent";

        }
    }


    function openNav() {
        document.getElementById("mySidenav").style.width = "50%";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }



    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark animated">
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={logo} alt="" /></Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">

                        <NavLink to='/work' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Works</NavLink>

                        <NavLink to="/products" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Products</NavLink>

                        <NavLink to="/ai-transformation" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Ai Transformation</NavLink>

                        <NavLink to="/workshops" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Workshops</NavLink>

                        <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About Us</NavLink>

                        <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link contact"} tabIndex="-1">Contact Us</NavLink>

                    </div>
                </div>


                <div id="mySidenav" className="sidenav">
                    <b className="closebtn" onClick={() => closeNav()}>&times;</b>
                    <NavLink to='/work' className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Works</NavLink>

                    <NavLink to="/products" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Products</NavLink>

                    <NavLink to="/ai-transformation" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"}>Ai Transformation</NavLink>

                    <NavLink to="/workshops" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">Workshops</NavLink>

                    <NavLink to="/about" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item nav-link"} tabIndex="-1">About Us</NavLink>

                    <NavLink to="/contact" className={(navInfo) => navInfo.isActive ? "active nav-item nav-link" : "nav-item contact nav-link"} tabIndex="-1">Contact Us</NavLink>

                </div>
            </div>
        </nav>

    );
};

export default Navigation;