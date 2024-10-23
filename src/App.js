import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Navbar from './Componentss/NavBar'
import {BrowserRouter,Routes,Route , Link} from 'react-router-dom'
import Footer from './Componentss/Footer';

function App() {
  return (
    <div className='App'>
      
          
        <BrowserRouter>
        <Navbar/>
        
          <Routes>
            <Route path='/'   element={<Home/>}/>
            <Route path='/aboutme'   element={<AboutMe/>}/>
            <Route path='/Projects'   element={<Projects/>}/>
            <Route path='/Contact'   element={<Contact/>}/>
            

          </Routes>
          <Footer/>

        </BrowserRouter>

        
        </div>

     
      
   
  );
}

export default App;
