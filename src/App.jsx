import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import { NetLanding } from '../src/Components/Projects/Netflix Landing Page/Netflix-landing.jsx'
import { StarLanding } from '../src/Components/Projects/Starbucks Landing Page/Starbucks-landing'
import { VideogameApp } from '../src/Components/Projects/Videogame App/Videogame-app'
import { Jagger } from '../src/Components/Projects/Jagger Resto/Jagger-resto'
import { Moggeta } from '../src/Components/Projects/Moggeta Landing Page/Moggeta-landing'


function App() {
  return (
    <BrowserRouter >
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project1' element={<NetLanding />} />
            <Route path='/project2' element={<StarLanding />} />
            <Route path='/project3' element={<VideogameApp />} />
            <Route path='/project4' element={<Jagger />} />
            <Route path='/project5' element={<Moggeta />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
