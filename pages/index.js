import React from 'react';
import NoSSR from 'react-no-ssr';
import { Placeholder, Preloader } from 'react-preloading-screen';
import AboutArea from '../components/home-eight/AboutArea';
import AgencyCtaArea from '../components/home-eight/AgencyCtaArea';
import BlogCard from '../components/home-eight/BlogCard';
import Feedback from '../components/home-eight/Feedback';
import Funfacts from '../components/home-eight/Funfacts';
import MainBanner from '../components/home-eight/MainBanner';
import Pricing from '../components/home-eight/Pricing';
import Projects from '../components/home-eight/Projects';
import Services from '../components/home-eight/Services';
import WhatWeOffer from '../components/home-eight/WhatWeOffer';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';
import HeaderThree from '../components/Layouts/HeaderThree';


export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <HeaderThree />
           
            <MainBanner />
            <WhatWeOffer />
            <AboutArea />
            <Services />
            <Funfacts />
            <Projects />
            <Pricing />
            <Feedback />
            <BlogCard />
            <AgencyCtaArea />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)