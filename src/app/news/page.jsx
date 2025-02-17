import Header from "../components/header"
import News from "../components/news"
import Footer from "../components/footer"

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mt-[50px]">
                <News />
            </div>
            <Footer className="mt-auto" />
        </div>
    );
}

export default Page;
