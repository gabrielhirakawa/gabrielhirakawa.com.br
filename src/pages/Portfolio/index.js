import React, { Component } from "react";
import api from '../../services/api';
import { format, parseISO } from 'date-fns'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom';
import { List, Layout, Return } from './styles';

class Portfolio extends Component{
    state ={
        repositories:[],
    }

    async componentDidMount(){
        
        const response = await api.get(`/users/gabrielhirakawa/repos`);
        const vetorRepos=[];




        for(let i=0; i<10; i++){
            if(response.data[i].language==="JavaScript"){
                vetorRepos.push(response.data[i]);
            }
            
        }

        console.log("vetor ",vetorRepos);
       

        this.setState({
            repositories: vetorRepos,
        });

        

    }

    render(){
        const { repositories } = this.state;
        
        return (
        <Layout>
            <List className="fadeIn">
            <h2><FontAwesomeIcon icon={faGithubAlt} /> Últimos repositórios</h2>
            {repositories.map(repository=>(
                <li key={repository.id}>
                    <span>{format(parseISO(repository.updated_at), "dd-MM-yyyy")}</span>
                    <span>{repository.name}</span>
                    <a target="_blank" rel="noopener noreferrer" href={repository.html_url}>Repositório</a>
                </li>
            ))}
            </List>
            <Return>
                <Link to="/">Voltar
                <span><FontAwesomeIcon icon={faUndoAlt} /></span>
                </Link>
             </Return>
            
        </Layout>
        );
    }
}

export default Portfolio;