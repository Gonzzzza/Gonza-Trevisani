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
    <BrowserRouter>
      {/* <div> */}
        <Header />
        <Routes>
          <Route path='https://gonza-trevisani.vercel.app/' element={<Home />} />
          <Route path='https://gonza-trevisani.vercel.app/project1' element={<NetLanding />} />
          <Route path='https://gonza-trevisani.vercel.app/project2' element={<StarLanding />} />
          <Route path='https://gonza-trevisani.vercel.app/project3' element={<VideogameApp />} />
          <Route path='https://gonza-trevisani.vercel.app/project4' element={<Jagger />} />
          <Route path='https://gonza-trevisani.vercel.app/project5' element={<Moggeta />} />
        </Routes>
        <Footer />
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
