import React from 'react';
import b1 from "../../img/b1.png";
import b2 from "../../img/b2.png";
import b3 from "../../img/b3.png";
import b4 from "../../img/b4.png";
import b5 from "../../img/b5.png";
import fLogo from "../../img/f-logo.png";
import Background1 from "../../img/c1.jpg";

const Info = (props) => {
    return (

            <div className="content">
                <h1 className="text-white text-uppercase">Instead of eating, <br /> you should feel the garnishing</h1>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  <br />incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
            </div>

    )
};

export default Info;
