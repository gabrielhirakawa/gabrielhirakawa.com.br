import React, { Component } from 'react';
import { Bg, Content, BackLink, BotaoGit } from './styles';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Git extends Component {
    render(){
        return(
            <Bg>
                <Content>
                    <h1>Aplicação em <span>React.js</span> para listagem de repositórios do Github.</h1>
                    <iframe src="https://www.youtube.com/embed/wRAL1QS37gg"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                    <p>
                        <h4>Projeto realizado na terceira fase do 8º bootcamp da Rockeseat.</h4>
                        <br/>
                        - Utilização do <span>Styled Components</span> para estilização dos componentes
                        <br/>
                        - <span>Axios</span> para obter informações da api do Github.
                        <br/>
                        - <span>Router</span> para navegação dentro da aplicação.
                    </p>
                    <BotaoGit 
                    href="https://github.com/gabrielhirakawa/repositories-github"
                    target="_blank"
                    rel="noopener noreferrer">
                        <button>
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                            Código fonte
                        </button>
                    </BotaoGit>
                </Content>
                <BackLink>
                    <Link to="/portfolio">
                        Voltar ao portfolio
                        <span><FontAwesomeIcon icon={faUndoAlt} /></span>
                    </Link>
                </BackLink>
               
                
                
            </Bg>
        );
    }
} 

export default Git;