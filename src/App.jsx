import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <BrowserRouter>
      <Toaster
        duration={5000}
        position='top-center'
        theme='dark'
      />
      <div>
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={
              <>
                <Home />
                <About />
                <div className="space--vertical" />
                <Skills />
                <div className="space--vertical" />
                <Services />
                <div className="space--vertical" />
                <Qualification />
                <div className="space--vertical" />
                <Work />
                {/* <Testimonials /> */}
                <div className="space--vertical" />
                <Contact />
              </>
            } />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </main>
        <div className="space--vertical" />
        <Footer />
        <ScrollUp />
      </div>
    </BrowserRouter>
  );
}

export default App;