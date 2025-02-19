import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <title>Город Андижан - Школа №56 Официальный сайт</title>
        <meta
          name="description"
          content="Официальный сайт школы №56 в городе Андижан. Узнайте о нашей школе, курсах, преподавателях и событиях."
        />
        <meta name="keywords" content="Школа 56, Андижан, Образование, Курсы, Учителя, Ученики, Средняя школа" />
        <meta name="author" content="Школа №56, Андижан" />

        <meta property="og:title" content="Город Андижан - Школа №56 Официальный сайт" />
        <meta property="og:description" content="Официальный сайт школы №56 в Андижане. Узнайте о нашей школе, курсах и событиях." />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://school56.uz" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Школа №56 - Официальный сайт" />
        <meta name="twitter:description" content="Официальный сайт школы №56 в Андижане. Узнайте о нашей школе, курсах и событиях." />
        <meta name="twitter:image" content="/banner.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Geist&family=Geist+Mono&family=Merriweather:wght@300;400;700&family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
