import Footer from "../components/footer";
import Header from "../components/header";
import Map from "../components/map";
const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 w-[95%] mx-auto py-10">
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold">Школа №56 – Город Андижан</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">
            Добро пожаловать в нашу школу! Мы гордимся своим образовательным процессом и стремимся
            к высоким стандартам.
          </p>
        </section>

        <section className="grid grid-cols-1 mt-10">
          <div className="bg-white flex flex-col items-center justify-center p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-blue-700">🎓 Наша миссия</h2>
            <p className="text-gray-600 mt-2">
              Наша школа стремится к созданию благоприятной среды, где каждый ученик получает
              качественное образование, развивает свои таланты и готовится к успешному будущему.
            </p>
          </div>

        </section>

        <section className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-semibold text-blue-800">📊 Статистика школы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">📚 2 987+</h3>
              <p className="text-gray-600">Ученики в год</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">👨‍🏫 120+</h3>
              <p className="text-gray-600">Учителя и сотрудники</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">🏆 35+</h3>
              <p className="text-gray-600">Лет опыта</p>
            </div>
          </div>
        </section>

     <Map/>
      </main>

      <Footer />
    </div>
  );
};

export default About;
