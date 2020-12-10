import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Header from '../components/Layouts/Header'
import MainBanner from '../components/home-one/MainBanner'
import BoxArea from '../components/home-one/BoxArea';
import ServicesArea from '../components/home-one/ServicesArea';
import Team from '../components/home-one/Team';
import Funfacts from '../components/home-one/Funfacts';
import RecentWork from '../components/home-one/RecentWork';
import Pricing from '../components/home-one/Pricing';
import Feedback from '../components/home-one/Feedback';
import Partner from '../components/home-one/Partner';
import Blog from '../components/home-one/Blog';
import Footer from '../components/Layouts/Footer';
import GoTop from '../components/Layouts/GoTop';

class Index extends React.Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                    {/* start-p/components/Layouts/Header.js */}
                    <Header />
                    {/* start-p/components/home-one/MainBanner.js */}
                    <MainBanner />
                    {/* start-p/components/home-one/BoxArea.js */}
                    <BoxArea />
                    {/* start-p/components/home-one/ServicesArea.js */}
                    <ServicesArea />
                    {/* start-p/components/home-one/Team.js */}
                    <Team />
                    {/* start-p/components/home-one/Funfacts.js */}
                    <Funfacts />
                    {/* start-p/components/home-one/RecentWork.js */}
                    <RecentWork />
                    {/* start-p/components/home-one/Pricing.js */}
                    <Pricing />
                    {/* start-p/components/home-one/Feedback.js */}
                    <Feedback />
                    {/* start-p/components/home-one/Partner.js */}
                    <Partner />
                    {/* start-p/components/home-one/Blog.js */}
                    <Blog />
                    {/* start-p/components/Layouts/Footer.js */}
                    <Footer />
                    {/* start-p/components/Layouts/GoTop.js */}
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        )
    }
}

export default Index