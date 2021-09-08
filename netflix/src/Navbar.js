import React, {useEffect, useState} from 'react'
import "./Navbar.css"

function Navbar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            
        </div>
    )
}

export default Navbar
