"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    theme: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const BOT_TOKEN = "7659209731:AAGOcMGuCudyyHGo8J_ebOaie2CPyrJIy98"; // Укажите ваш токен бота
  const CHAT_ID = "6207044781"; // Укажите ID чата
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `📩 *Новое сообщение!*

👤 *Имя:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Телефон:* ${formData.phone}
👉 *Тема:* ${formData.theme}
📝 *Сообщение:* ${formData.message}`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "Markdown" }),
      });

      if (response.ok) {
        setModalOpen(true);
        setFormData({ name: "", email: "", phone: "", theme: "", message: "" });
      } else {
        alert("Ошибка при отправке сообщения! Попробуйте снова.");
      }
    } catch (error) {
      alert("Проблема с интернет-соединением! Проверьте подключение.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш телефон"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="theme"
          placeholder="Тема сообщения"
          value={formData.theme}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full h-[150px] md:h-[200px] resize-none p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Отправляется..." : "Отправить"}
        </button>
      </form>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center  w-[80%] sm:w-[70%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
            <h3 className="text-xl font-bold mb-2">Сообщение отправлено!</h3>
            <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Спасибо, Понятно
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
