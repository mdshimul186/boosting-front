import React from 'react'
import OwlCarousel from 'react-owl-carousel3'
import * as Icon from 'react-feather'
import Link from 'next/link'

const options = {
    items: 4,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1
        },
        786: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
}

export default class MainBanner extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row h-100 justify-content-center align-items-center">
                                    <div className="col-lg-5">
                                        <div className="hero-content">
                                            <h1>Built for Developers</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                            <Link href="#">
                                                <a className="btn btn-primary">Get Started</a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 offset-lg-1">
                                        <div className="banner-form ml-3">
                                            <form onSubmit={this.onFormSubmit}>
                                                <div className="form-group">
                                                    <label>Username</label>
                                                    <input type="text" className="form-control" placeholder="Enter username" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                                </div>

                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="Create a password" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">Register Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape1"><img src={require("../../static/images/shape1.png")} alt="shape" /></div>
                    <div className="shape2 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
                    <div className="shape3"><img src={require("../../static/images/shape3.svg")} alt="shape" /></div>
                    <div className="shape4"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
                    <div className="shape5"><img src={require("../../static/images/shape5.png")} alt="shape" /></div>
                    <div className="shape6 rotateme"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
                    <div className="shape7"><img src={require("../../static/images/shape4.svg")} alt="shape" /></div>
                    <div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
                </div>

                <section className="boxes-area">
                    <div className="container">
                        <div className="row">
                            <OwlCarousel 
                                className="owl-theme"
                                {...options}
                            >
                                <div className="col-lg-12 col-md-12">
                                    <div className="single-box">
                                        <div className="icon">
                                            <Icon.Airplay />
                                        </div>
                                        <h3>Fully Customizable</h3>
                                        <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-box bg-f78acb">
                                        <div className="icon">
                                            <Icon.Percent />
                                        </div>
                                        <h3>Professional Tools</h3>
                                        <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-box bg-c679e3">
                                        <div className="icon">
                                            <Icon.PieChart />
                                        </div>
                                        <h3>Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-box bg-eb6b3d">
                                        <div className="icon">
                                            <Icon.Server />
                                        </div>
                                        <h3>Easily To Use</h3>
                                        <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-box bg-eb6b3d">
                                        <div className="icon">
                                            <Icon.Target />
                                        </div>
                                        <h3>App Integration</h3>
                                        <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

