import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

const Header = () =>
(
    <div className="container">
        <div className="header">
            <ul>
                <li><a href="/#komitelerimiz">Komitelerimiz</a></li>
                <li><a href="/#">Projelerimiz</a></li>

                <li>
                    <a href="/#">
                       <img className="logo" src={require("./images/ieeeEge.png")} alt="IEEE Logo" height="50px" /> 
                    </a>
                </li>

                <li><a href="/#">Etkinliklerimiz</a> </li>
                <li><a href="/#about-us">Hakkımızda</a></li>
            </ul>

        </div>

    </div>
)

export default Header;
