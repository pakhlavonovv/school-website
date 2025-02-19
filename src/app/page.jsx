import Header from "./components/header"
import Hero from "./components/hero"
import News from "./components/news"
import Statistic from "./components/statistic"
import Map from "./components/map"
import Footer from "./components/footer"
import CallToAction from './components/call-to-action'
const Page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <News/>
      <CallToAction/>
      <Statistic/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Page