import React from "react"
import { Link, NavLink, Navigate } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"

// function Abc(){
//     return(<h1>askdhfasdhfkjashdfkahsdf</h1>)
// }

// function VanLogo(text) {
//     return (
//         <Link className="site-logo" to="/">{text}</Link>
//     )
// }

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    const isSignIn = localStorage.getItem("loggedin")
    console.log(isSignIn)

    return (
        <header>
            {/* {Abc()} */}
            {/* { VanLogo("#VanLife") } */}
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to={isSignIn === null? "/host": "login"} className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                <button className="delete-credentials" onClick={fakeLogOut}>Log out</button>
            </nav>
        </header>
    )
}