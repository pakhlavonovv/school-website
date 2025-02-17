import Footer from "../components/footer";
import Header from "../components/header";
import Courses from '../components/courses'
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center">
        <Courses/>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
