
const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-900 text-white py-6">
      <div className="w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2">
        
        <div className="text-center flex flex-col items-center justify-center gap-1 md:text-left">
          <h2 className="text-xl font-semibold">Школа 56, город Андижан</h2>
          <p className="text-gray-400 text-sm">Образование – основа будущего!</p>
        </div>
    
        <div className="mt-4 flex flex-col items-center md:mt-0">
          <h3 className="text-lg font-semibold">Полезные ссылки</h3>
          <ul className="text-gray-400 text-sm space-y-1 self-center">
            <li className="text-start"><a href="/about" className="hover:text-white">О школе</a></li>
            <li className="text-start"><a href="/news" className="hover:text-white">Новости</a></li>
            <li className="text-start"><a href="/contact" className="hover:text-white">Связаться</a></li>
          </ul>
        </div>
    
      </div>
    
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Андижан, школа 56. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer
