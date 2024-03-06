import './App.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import About from './Components/about/About.jsx'
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav.jsx';
import Footer from './Components/footer/Footer';
import Experience from './Components/experience/Experience';
import Contact from './Components/contact/Contact';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonial from './Components/testimonial/Testimonial';
import Services from './Components/services/Services';
function App() {
  return (
    <BrowserRouter>
       <Header /> 
       <Nav /> 
       <About /> 
       <Experience /> 
       <Services /> 
       <Portfolio />
       <Testimonial /> 
       <Contact /> 
       <Footer /> 
    </BrowserRouter>
  );
}

export default App;
