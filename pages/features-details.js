import React, { Component } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'

class FeaturesDetails extends Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                    <HeaderThree />
                    <div className="page-title-area">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <h2>Features Details</h2>
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

                    <section className="features-details-area ptb-80">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 features-details-image">
                                    <img 
                                        src={require("../static/images/features-details-image/feature1.png")} 
                                        className="wow fadeInUp" 
                                        alt="image" 
                                    />
                                </div>

                                <div className="col-lg-6 features-details">
                                    <div className="features-details-desc">
                                        <h3>Information Retrieval</h3>
                                        <p>Build integration aute irure design in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat design proident.</p>

                                        <ul className="features-details-list">
                                            <li>Life time supports</li>
                                            <li>Exclusive design</li>
                                            <li>Solve your problem with us</li>
                                            <li>We Provide Awesome Services</li>
                                            <li>Your business deserves best Software</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="separate"></div>

                            <div className="row align-items-center">
                                <div className="col-lg-6 features-details">
                                    <div className="features-details-desc">
                                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                        <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 features-details-image">
                                    <img 
                                        src={require("../static/images/features-details-image/feature2.png")} 
                                        className="wow fadeInUp" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        );
    }
}

export default FeaturesDetails;
