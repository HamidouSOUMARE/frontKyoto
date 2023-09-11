import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activites from './pages/Activites';
import Connexion from './pages/Connexion';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Itineraire from './pages/Itineraire';
import Logements from './pages/Logements';
import Restaurants from './pages/Restaurants';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/activites' element={<Activites/>}/>
        <Route path='/connexion' element={<Connexion/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/itineraire' element={<Itineraire/>}/>
        <Route path='/logements' element={<Logements/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
