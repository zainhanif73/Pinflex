import Header from './Header'
import Hero from './Hero'
import TopRatedMovie from './TopRatedMovie'
import TopRatedShows from './TopRatedShows'
import TrendingMovie from './TrendingMovie'
import TrendingShows from './TrendingShows'

function Main() {

    return (
        <>
            <div >
                <Header />
                <Hero />
                <TrendingMovie/>
                <TopRatedMovie/>
                <TrendingShows/>
                <TopRatedShows/>
            </div>
        </>
    )
}

export default Main