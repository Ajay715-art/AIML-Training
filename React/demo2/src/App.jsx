import {Routes,Route} from   'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'
import Navigation from '../pages/Navigation'



function App() {

  return (
    <>  
    <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    <Navigation />
    </>
  )
}

export default App;