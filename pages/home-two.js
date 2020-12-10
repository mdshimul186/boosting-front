import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import MainBanner from '../components/home-two/MainBanner'
import ServicesArea from '../components/home-one/ServicesArea'
import Team from '../components/home-one/Team'
import Funfacts from '../components/home-one/Funfacts'
import RecentWork from '../components/home-one/RecentWork'
import Pricing from '../components/home-one/Pricing'
import Feedback from '../components/home-one/Feedback'
import Partner from '../components/home-one/Partner'
import Blog from '../components/home-one/Blog'
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
            <ServicesArea />
            <Team />
            <Funfacts />
            <RecentWork />
            <Pricing />
            <Feedback />
            <Partner />
            <Blog />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
