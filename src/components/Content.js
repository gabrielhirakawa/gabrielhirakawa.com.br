import React, { Component } from "react";
import { Link } from 'react-router-dom';
import img from '../assets/img.png';

class Content extends Component{
    render(){
        return(
            <div class="layout">
                <img class="" src={img} />
                <div class="textocentro">
                    <div id="name">
                        <span class="firstName">GABRIEL </span>
                        <span class="lastName">HIRAKAWA</span>
                    </div>
                    <h3>Desenvolvedor FullStack</h3>
                    <p>
                    22 anos, estudante de programação,<br />
                    entusiasta em JavaScript e<br />
                    apaixonado por tecnologia.
                    </p>
                    <Link  to="about"><button class="buttonAzul">ABOUT</button></Link>
                    <Link to="portfolio"><button class="buttonBranco">PORTFOLIO</button></Link>
                </div>
            </div>
        );
    }
}

export default Content;