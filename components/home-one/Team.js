import React from 'react'
import OwlCarousel from 'react-owl-carousel3';
import * as Icon from 'react-feather';
import Link from 'next/link'

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

class Team extends React.Component {
    render() {
        return (
            <section className="team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Awesome Team</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="row m-0">
                    <OwlCarousel 
                        className="owl-theme"
                        {...options}
                    >
                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team1.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Josh Buttler</h3>
                                            <span>CEO & Founder</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team2.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Alex Maxwel</h3>
                                            <span>Marketing Manager</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team3.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Janny Cotller</h3>
                                            <span>Web Developer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team4.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Jason Statham</h3>
                                            <span>UX/UI Designer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team5.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Corey Anderson</h3>
                                            <span>Project Manager</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team1.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Josh Buttler</h3>
                                            <span>CEO & Founder</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team2.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Alex Maxwel</h3>
                                            <span>Marketing Manager</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team3.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Janny Cotller</h3>
                                            <span>Web Developer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team4.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Jason Statham</h3>
                                            <span>UX/UI Designer</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="item col-lg-12">
                                <div className="single-team">
                                    <div className="team-image">
                                        <img src={require("../../static/images/team-image/team5.jpg")} alt="image" />
                                    </div>

                                    <div className="team-content">
                                        <div className="team-info">
                                            <h3>Corey Anderson</h3>
                                            <span>Project Manager</span>
                                        </div>

                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Facebook /></a>
                                                </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Twitter /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Linkedin /></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a><Icon.Gitlab /></a>
                                                </Link>
                                            </li>
                                        </ul>

                                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        )
    }
}

export default Team