import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

class Main extends Component{
    render(){
        return(
            <div id="main">
                <Sidebar/>
                <Content/>
            </div>
        );
    }
}

export default Main;