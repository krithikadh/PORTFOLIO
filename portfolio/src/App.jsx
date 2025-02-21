import About from './components/FunctionalComponents/About'
import Achievements from './components/FunctionalComponents/Achievements'
import Certifications from './components/FunctionalComponents/Certifications'
import Contact from './components/FunctionalComponents/Contact'
import Education from './components/FunctionalComponents/Education'
import Experience from './components/FunctionalComponents/Experience'
import Navbar from './components/FunctionalComponents/Navbar'
import Profiles from './components/FunctionalComponents/Profiles'
import Projects from './components/FunctionalComponents/Projects'
import Skills from './components/FunctionalComponents/Skills'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/achievements' element={<Achievements />}/>
          <Route path='/certifications' element={<Certifications />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/education' element={<Education />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/profiles' element={<Profiles />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/skills' element={<Skills />}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App