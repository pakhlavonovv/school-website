const Map = () => {
    return (
      <div className="w-[90%] sm:w-[80%] p-4 sm:p-6 bg-white mx-auto shadow-xl mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center rounded-lg">
        <div className="rounded-lg text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">📍 56-Адрес школы</h2>
          <div className="flex flex-col gap-4 text-gray-700">
            <p><strong>📌 Адрес:</strong> Andijon shahri, Mustaqillik MFY, A. Haydarov ko‘chasi, 1B-uy</p>
            <p><strong>📞 Номер телефона:</strong> +998 99 903-10-15</p>
            <p><strong>⏳ Рабочее время:</strong> Понедельник - Суббота, 08:00 - 18:00</p>
          </div>
        </div>
        <div className="rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Карта школы 56</h2>
          <div className="w-full max-w-[450px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.737329840613!2d72.36389314485028!3d40.75391553554887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedf185708a93%3A0x4841b0b3e6c42d67!2sRei%20Ayanami%20Secondary%20School%2056!5e0!3m2!1sen!2s!4v1739740800503!5m2!1sen!2s"
              className="w-full aspect-video border-0 rounded-lg shadow-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default Map;
  