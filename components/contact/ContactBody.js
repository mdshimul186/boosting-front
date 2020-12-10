import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
import GoogleMapComponent from "./GoogleMapComponent"
import 'isomorphic-fetch'

export default class ContactBody extends React.Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.status === 200 ? this.setState({ submitted: true }) : ''
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div className="alert alert-success">
                    <strong>Thank you!</strong> Your message is send to the owner
                    <button onClick={this.onHideSuccess} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="contact-info-area ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Mail />
                                    </div>
                                    <h3>Mail Here</h3>
                                    <p>
                                        <Link href="#">
                                            <a>admin@startp.com</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="#">
                                            <a>info@startp.com</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Map />
                                    </div>
                                    <h3>Visit Here</h3>
                                    <p>27 Division St, New York, NY 10002, <br /> USA</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <Icon.Phone />
                                    </div>
                                    <h3>Call Here</h3>
                                    <p>
                                        <Link href="#">
                                            <a>+123 456 7890</a>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link href="#">
                                            <a>+241 452 4526</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMapComponent />

                <section className="contact-area ptb-80">
                    <div className="container">
                        <div className="section-title">
                            <h2>Get In Touch With Us</h2>
                            <div className="bar"></div>
                            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                        </div>

                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <img src={require("../../static/images/about-one.png")} alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <form 
                                    id="contactForm" 
                                    onSubmit={this.onSubmit}
                                >
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    className="form-control" 
                                                    required data-error="Please enter your name" 
                                                    placeholder="Name" 
                                                    value={this.state.formFields.name}
                                                    onChange={this.nameChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    className="form-control" 
                                                    required 
                                                    data-error="Please enter your email" 
                                                    placeholder="Email" 
                                                    value={this.state.formFields.email}
                                                    onChange={this.emailChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text"
                                                    name="phone" 
                                                    className="form-control" 
                                                    placeholder="Phone" 
                                                    value={this.state.formFields.phone}
                                                    onChange={this.phoneChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    name="subject"
                                                    className="form-control" 
                                                    placeholder="Subject" 
                                                    value={this.state.formFields.subject}
                                                    onChange={this.subjectChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea 
                                                    name="message" 
                                                    className="form-control" 
                                                    id="message" 
                                                    cols="30" 
                                                    rows="5" 
                                                    required 
                                                    data-error="Write your message" 
                                                    placeholder="Your Message" 
                                                    value={this.state.formFields.text}
                                                    onChange={this.textChangeHandler}
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">

                                            <button type="submit" className="btn btn-primary">Send Message</button>

                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    {this.successMessage()}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
