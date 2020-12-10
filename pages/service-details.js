import React, { Component } from 'react';
import HeaderThree from '../components/Layouts/HeaderThree';
import Footer from '../components/Layouts/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderThree />
                <div className="page-title-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <h2>Services Details</h2>
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

                <section className="services-details-area ptb-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 services-details">
                                <div className="services-details-desc">
                                    <h3>Incredible Infrastructure</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.</p>

                                    <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 services-details-image">
                                <img src={require("../static/images/services-details-image/services-details1.png")} className="wow fadeInUp" alt="image" />
                            </div>
                        </div>

                        <div className="separate"></div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 services-details-image">
                                <img src={require("../static/images/services-details-image/services-details2.png")} className="wow fadeInUp" alt="image" />
                            </div>

                            <div className="col-lg-6 services-details">
                                <div className="services-details-desc">
                                    <p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;
