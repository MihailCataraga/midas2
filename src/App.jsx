import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HomeRo from './pages/HomeRo';
import HomeRu from './pages/HomeRu';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ro' element={<HomeRo />} />
          <Route path='/ru' element={<HomeRu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
