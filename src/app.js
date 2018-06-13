import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import RoutesList from "./routes";
import CNavBar from "./components/CNavBar";
import './styles/myStyle.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <CNavBar />
                    <Container className="MT70"> 
                        <RoutesList />
                    </Container>
                </div>
            </BrowserRouter>
        )
    }
}
