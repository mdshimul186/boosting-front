import React, { Component } from 'react';
import Link from "next/link";
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer'

class TeamOne extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderThree />
                <div className="page-title-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <h2>Thankyou</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="shape1"><img src={require("../static/images/shape1.png")} alt="shape" /></div>
                    <div className="shape2 rotateme"><img src={require("../static/images/shape2.svg")} alt="shape" /></div>
                    <div className="shape3"><img src={require("../static/images/shape3.svg")} alt="shape" /></div>
                    <div className="shape4"><img src={require("../static/images/shape4.svg")} alt="shape" /></div>
                    <div className="shape5"><img src={require("../static/images/shape5.png")} alt="shape" /></div>
                    <div className="shape6 rotateme"><img src={require("../static/images/shape4.svg")} alt="shape" /></div>
                    <div className="shape7"><img src={require("../static/images/shape4.svg")} alt="shape" /></div>
                    <div className="shape8 rotateme"><img src={require("../static/images/shape2.svg")} alt="shape" /></div>
                </div>
                <div className="thank-you-area">
                    <div className="container">
                        <h1>Your order has been confirmed.</h1>
                        <Link href="/">
                            <a className="btn btn-primary">Go Home</a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
