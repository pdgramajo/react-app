import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import RoutesList from './routes';
import CNavBar from './components/CNavBar';
import './styles/myStyle.css';

const App = () => (
  <BrowserRouter>
    <div>
      <CNavBar />
      <Container className="MT70" fluid>
        <RoutesList />
      </Container>
    </div>
  </BrowserRouter>
);

export default App;
