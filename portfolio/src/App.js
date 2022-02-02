import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'

import './App.css'

//A function that has navbar up on the 3 different routes.
function App() {
  return (
    <div className="mainContent">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
