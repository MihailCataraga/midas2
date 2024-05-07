import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';


function App() {
  const [ip, setIp] = useState('');

  useEffect(() => {
      fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
          console.log('Adresa IP a utilizatorului:', data.ip);
          setIp(data.ip);
  
          // Apelăm serverul backend numai după ce obținem adresa IP
          fetch('http://localhost:8080/location', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ip: data.ip }) // Trimitem obiectul cu adresa IP
          })
          .then(res => res.json())
          .then(data => {
              console.log(data.loc)
              // Redirectăm utilizatorul pe baza răspunsului primit de la serverul backend
              if(data.loc === 'MD' || data.loc === 'RO') {
                  window.location.href = 'https://midas2.vercel.app/ro';
              } else if(data.loc === 'RU' || data.loc === 'UA') {
                  window.location.href = 'https://midas2.vercel.app/ru';
              } else {
                  window.location.href = 'https://midas2.vercel.app/';
              }
          })
          .catch(error => {
              console.error('Eroare la obținerea locației:', error);
          });
      })
      .catch(error => {
          console.error('Eroare la obținerea adresei IP:', error);
      });
  }, []); // Asigurăm că acest efect se execută doar o singură dată la încărcarea componentei
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ro' element={<Home />} />
          <Route path='/ru' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
