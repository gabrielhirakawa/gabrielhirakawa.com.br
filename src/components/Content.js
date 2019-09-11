import React, { Component } from "react";
import { Link } from 'react-router-dom';
import img from '../assets/img.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

class Content extends Component{
    render(){
        return(
            <div className="layout">
                <img alt="hira" src={img} />
                <div className="textocentro  fadeIn">
                    <div id="name">
                        <span className="firstName">GABRIEL </span>
                        <span className="lastName">HIRAKAWA</span>
                    </div>
                    <h3>Desenvolvedor FullStack</h3>
                    <p>
                    22 anos, estudante de programação,<br />
                    entusiasta em JavaScript e<br />
                    apaixonado por tecnologia.
                    </p>
                    <Link  to="about"><button className="buttonAzul">ABOUT</button></Link>
                    <Link to="portfolio"><button className="buttonBranco">PORTFOLIO</button></Link>
                </div>
            </div>
        );
    }
}

export default Content;