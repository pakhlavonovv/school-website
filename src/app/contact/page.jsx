import Footer from "../components/footer"
import Header from "../components/header"
import Map from "../components/map"
const Page = () => {
  return (
    <div>
        <Header/>
        <div className="mt-[50px]">
            <Map/>
        </div>
        <div className="mt-[50px]">
            <Footer/>
        </div>
    </div>
  )
}

export default Page