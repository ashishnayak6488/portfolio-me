import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'

const Home = () => {

    const { portfolioData } = useSelector((state) => state.root)


    return (
        <div id='home'>
            <Header />
            {
                portfolioData && (
                    <div className='bg-primary px-40 pt-20 sm:pt-1 sm:px-5'>
                        <Intro />
                        <About />
                        <Education />
                        <Projects />
                        <Contact />
                        <Footer />
                        <LeftSider />
                    </div>
                )}
        </div>
    )
}

export default Home
