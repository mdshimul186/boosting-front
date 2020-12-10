import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/home-five/MainBanner';
import Partner from '../components/home-five/Partner';
import Services from '../components/home-five/Services';
import Cta from '../components/home-five/Cta';
import Funfacts from '../components/home-five/Funfacts';
import Features from '../components/home-five/Features';
import Team from '../components/home-five/Team';
import Feedback from '../components/home-five/Feedback';
import WhyChoose from '../components/home-five/WhyChoose';
import Blog from '../components/home-five/Blog';

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header />
            <MainBanner />
            <Partner />
            <Services />
            <Cta />
            <Funfacts />
            <Features />
            <Team />
            <Feedback />
            <WhyChoose />
            <Blog />

            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
