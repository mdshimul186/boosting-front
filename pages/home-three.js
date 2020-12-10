import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/home-three/MainBanner';
import Boxes from '../components/home-three/Boxes';
import DomainSearch from '../components/home-three/DomainSearch';
import WhyChoose from '../components/home-three/WhyChoose';
import Pricing from '../components/home-three/Pricing';
import Feedback from '../components/home-three/Feedback';
import Partner from '../components/home-three/Partner';
import Blog from '../components/home-three/Blog';
import Features from '../components/home-three/Features';
import Cta from '../components/home-three/Cta';

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
            <Boxes />
            <DomainSearch />
            <WhyChoose />
            <Pricing />
            <Feedback />
            <Partner />
            <Features />
            <Blog />
            <Cta />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
