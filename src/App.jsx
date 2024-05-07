import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {

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
