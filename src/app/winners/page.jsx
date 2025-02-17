import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-[20px]">Победителей пока нет</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
