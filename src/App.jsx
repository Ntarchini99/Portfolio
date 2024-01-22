import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
