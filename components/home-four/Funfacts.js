import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'),{
    ssr: false,
    loading: () => 0
});
import 'odometer/themes/odometer-theme-default.css';

class Funfacts extends React.Component {

    state = {
        download: 0,
        feedback: 0,
        worker: 0,
        contributor: 0
    };

    componentDidMount(){
        this.setState({ 
            download: 600,
            feedback: 250,
            worker: 333,
            contributor: 474
        });
    }

    render(){
        const { download, feedback, worker, contributor } = this.state;
        return (
            <section className="funfacts-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>We always try to understand users expectation</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
    
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration={500} value={download} />K
                                </h3>
                                <p>Downloaded</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={feedback} />K
                                </h3>
                                <p>Feedback</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={worker} />K
                                </h3>
                                <p>Workers</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3>
                                    <Odometer format="d" duration="500" value={contributor} />K
                                </h3>
                                <p>Contributors</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="contact-cta-box">
                        <h3>Have any question about us?</h3>
                        <p>Don't hesitate to contact us</p>
                        <Link href="#">
                            <a className="btn btn-primary">Contact Us</a>
                        </Link>
                        
                    </div>
    
                    <div className="map-bg">
                        <img src={require("../../static/images/map.png")} alt="map" />
                    </div>
                </div>
            </section>
        )
    }
}

export default Funfacts