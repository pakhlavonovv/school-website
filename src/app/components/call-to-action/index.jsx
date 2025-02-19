import Link from "next/link";
import React from "react";
import Image from "next/image";
import SchoolImage from "../../../../public/images/school7.jpg";

const CallToAction = () => {
  return (
    <section className="bg-blue-50 py-12 mt-[50px] mb-[50px] px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-[20px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] lg:flex-row items-center">
        <div className="order-2 lg:order-1 lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Почему стоит учиться в нашей школе?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Наша школа предлагает высокий уровень образования, современные технологии обучения
            и индивидуальный подход к каждому ученику. У нас работают квалифицированные учителя,
            которые помогут вам достичь лучших результатов!
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Опытные преподаватели</li>
            <li>Современные учебные программы</li>
            <li>Технологически оснащенные классы</li>
            <li>Дополнительные кружки и секции</li>
          </ul>
          <Link
            href={"/about"}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition hover:bg-blue-700"
          >
            Узнать больше
          </Link>
        </div>

        <div className="lg:w-1/2 order-1 lg:order-2 w-[90%] sm:w-[70%] flex justify-center">
          <Image
            src={SchoolImage}
            alt="Школа №56"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
