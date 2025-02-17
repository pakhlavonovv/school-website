import Header from "./components/header"
import Hero from "./components/hero"
import News from "./components/news"
import Statistic from "./components/statistic"
import Map from "./components/map"
import Footer from "./components/footer"

const Page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <News/>
      <Statistic/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Page