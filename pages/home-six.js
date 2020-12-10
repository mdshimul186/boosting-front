import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import MainBanner from '../components/home-six/MainBanner'
import Partner from '../components/home-six/Partner'
import WhatWeOffer from '../components/home-six/WhatWeOffer'
import AboutArea from '../components/home-six/AboutArea'
import Services from '../components/home-six/Services'
import Funfacts from '../components/home-six/Funfacts'
import Projects from '../components/home-six/Projects'
import Pricing from '../components/home-six/Pricing'
import Feedback from '../components/home-six/Feedback'
import BlogCard from '../components/home-six/BlogCard'
import Newsletter from '../components/home-six/Newsletter'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'

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
            <WhatWeOffer />
            <AboutArea />
            <Services />
            <Funfacts />
            <Projects />
            <Pricing />
            <Feedback />
            <BlogCard />
            <Newsletter />
     
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)