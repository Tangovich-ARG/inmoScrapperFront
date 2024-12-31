import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import TablaInmobiliaria from './components/TablaInmobiliaria';

const About = () => <h2>Acerca de InmoScrapper</h2>;
const Contact = () => <h2>Contacto</h2>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TablaInmobiliaria />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
