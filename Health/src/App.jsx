import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Docters from './Doctors';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Docters" element={<Docters />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;

