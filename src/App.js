import './app.css'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Services from './pages/services'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
