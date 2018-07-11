import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import RoutesList from './routes';
import CNavBar from './components/CNavBar';
import './styles/main.css';
import './styles/myStyle.css';
import logo from "./img/logo.png";
import b1 from "./img/b1.png";
import b2 from "./img/b2.png";
import b3 from "./img/b3.png";
import b4 from "./img/b4.png";
import b5 from "./img/b5.png";
import fLogo from "./img/f-logo.png";
import Background1 from "./img/c1.jpg";

const App = () => (
  // <BrowserRouter>
  //   <div>
  //     <CNavBar />
  //     <Container className="MT70" fluid>
  //       <RoutesList />
  //     </Container>
  //   </div>
  // </BrowserRouter>
  <div>
      <div className="main-wrapper-first">
        <header>
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="index.html"><img src={logo} alt=""/></a>
                </div>
                <div className="main-menubar d-flex align-items-center">
                  <nav className="hide">
                    <a href="index.html">Home</a>
                    <a href="generic.html">Generic</a>
                    <a href="elements.html">Elements</a>
                  </nav>
                  <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  		<div className="main-wrapper">
			<div className="active-banner-slider">
				<div className="item d-flex align-items-center">
					<div className="container">
						<div className="content">
							<h1 className="text-white text-uppercase">Instead of eating, <br/> you should feel the garnishing</h1>
							<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  <br/>incididunt ut labore et dolore magna aliqua.</p>
							<a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
    <div className="main-wrapper">
			{/* <!-- Start Feature Area --> */}
			<section className="featured-area">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="single-feature">
								<div className="icon">
									<span className="lnr lnr-sun"></span>
								</div>
								<div className="desc text-center">
									<h6 className="title text-uppercase">Stunning Visuals</h6>
									<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature">
								<div className="icon">
									<span className="lnr lnr-code"></span>
								</div>
								<div className="desc text-center">
									<h6 className="title text-uppercase">Clean Code</h6>
									<p>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility </p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature">
								<div className="icon">
									<span className="lnr lnr-clock"></span>
								</div>
								<div className="desc text-center">
									<h6 className="title text-uppercase">Punctuality</h6>
									<p>If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that nice big screen</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature">
								<div className="icon">
									<span className="lnr lnr-sun"></span>
								</div>
								<div className="desc text-center">
									<h6 className="title text-uppercase">Stunning Visuals</h6>
									<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature">
								<div className="icon">
									<span className="lnr lnr-code"></span>
								</div>
								<div className="desc text-center">
									<h6 className="title text-uppercase">Clean Code</h6>
									<p>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility </p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-feature">
								<div className="icon">
									<span className="lnr lnr-clock"></span>
								</div>
								<div className="desc text-center">
									<h6 className="title text-uppercase">Punctuality</h6>
									<p>If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that nice big screen</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Feature Area -->
			<!-- Start Story Area --> */}
			<section className="story-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3">
							<div className="story-title">
								<h3 className="text-white">Our Untold Story</h3>
								<span className="text-uppercase text-white">Re-imagining the way</span>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="story-box">
								<h6 className="text-uppercase">From the part of beginning</h6>
								<p>Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization. Societies are becoming more inter-connected. Thoughts from different</p>
								<a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Story Area -->

			<!-- Start Amazing Works Area --> */}

			<section className="amazing-works-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h3>Our Amazing Works</h3>
								<span className="text-uppercase">Re-imagining the way</span>
							</div>
						</div>
					</div>
					<div className="active-works-carousel mt-40">
						<div className="item">
							<div className="thumb" style={{backgroundImage: `url(${Background1})`}} ></div>
							<div className="caption text-center">
								<h6 className="text-uppercase">Vector Illustration</h6>
								<p>LCD screens are uniquely modern in style, and the liquid crystals <br/> that make them work have allowed humanity to</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Amazing Works Area -->
			<!-- Start Story Area --> */}
			<section className="story-area-2">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3">
							<div className="story-title sm-show text-center">
								<h3 className="text-white">Our Untold Story</h3>
								<span className="text-uppercase text-white">Re-imagining the way</span>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="story-box">
								<h6 className="text-uppercase">From the part of beginning</h6>
								<p>Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization. Societies are becoming more inter-connected. Thoughts from different</p>
								<a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="story-title sm-hide text-right">
								<h3 className="text-white">Our Untold Story</h3>
								<span className="text-uppercase text-white">Re-imagining the way</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Story Area --> */}
			<div className="brand-area">
				<div className="container">
					<div className="total-brand d-flex justify-content-around">
						<img src={b1} alt=""/>
						<img src={b2} alt=""/>
						<img src={b3} alt=""/>
						<img src={b4} alt=""/>
						<img src={b5} alt=""/>
					</div>
				</div>
			</div>
			{/* <!-- Start Subscription Area --> */}
			<section className="subscription-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="section-title text-center">
								<h3>Subscribe for our Newsletter</h3>
								<span className="text-uppercase">Re-imagining the way</span>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div id="mc_embed_signup">
								<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
									<input type="email" name="EMAIL" placeholder="Email address" required />
									<div >
										<input type="text" name="b_36c4fd991d266f23781ded980_aefe40901a"  value="" />
									</div>
									<button className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></button>
									<div className="info"></div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Subscription Area -->
			<!-- Start Footer Widget Area --> */}
			<section className="footer-widget-area">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="single-widget d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-pushpin"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Address</h6>
									<p>56/8, panthapath, west <br /> dhanmondi, kalabagan, <br />Dhaka - 1205</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-widget d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-earth"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Email Address</h6>
									<div className="contact">
										<a href="mailto:info@dataarc.com">info@dataarc.com</a> <br />
										<a href="mailto:support@dataarc.com">support@dataarc.com</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-widget d-flex flex-wrap justify-content-between">
								<div className="icon d-flex align-items-center justify-content-center">
									<span className="lnr lnr-phone"></span>
								</div>
								<div className="desc">
									<h6 className="title text-uppercase">Phone Number</h6>
									<div className="contact">
										<a href="tel:1545">012 4562 982 3612</a> <br />
										<a href="tel:54512">012 6321 956 4587</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer>
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
);

export default App;
