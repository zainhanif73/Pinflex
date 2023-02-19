import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import TopRatedMovie from './TopRatedMovie'
import TopRatedShows from './TopRatedShows'
import TrendingMovie from './TrendingMovie'
import TrendingShows from './TrendingShows'

function Main() {
    const [click, setClick] = useState(0);
    return (
        <>
            <div>
                <Header click={click} setClick={setClick}/>
                <Hero />
                <TrendingMovie/>
                <TopRatedMovie/>
                <TrendingShows/>
                <TopRatedShows/>
                <Footer/>
            </div>
        </>
    )
}

export default Main