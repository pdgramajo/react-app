import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import RoutesList from './routes';
import CNavBar from './components/CNavBar';
import './styles/main.css';
import './styles/myStyle.css';
import fLogo from "./img/f-logo.png";
import MainContainer from './components/container';

const App = () => (
	// <BrowserRouter>
	//   <div>
	//     <CNavBar />
	//     <Container className="MT70" fluid>
	//       <RoutesList />
	//     </Container>
	//   </div>
	// </BrowserRouter>
	<BrowserRouter>
		<div>
			<div className="main-wrapper-first">
				<CNavBar />
			</div>
			<MainContainer>
				<RoutesList />
			</MainContainer>
			<div className="main-wrapper">
				<section className="footer-widget-area-footer">
					<footer style={{marginTop:0}}>
						<div className="container">
							<div className="footer-content d-flex justify-content-between align-items-center flex-wrap">
								<div className="logo">
									<a href="index.html"><img src={fLogo} alt="" /></a>
								</div>
								<div className="copy-right-text">Copyright &copy; 2017  |  All rights reserved. This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></div>
								<div className="footer-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
									<a href="#"><i className="fa fa-dribbble"></i></a>
									<a href="#"><i className="fa fa-behance"></i></a>
								</div>
							</div>
						</div>
					</footer>
				</section>
			</div>
		</div>
	</BrowserRouter>
);

export default App;
