import React from 'react';
import Header from './components/Header'; // Importa el Header
import TablaInmobiliaria from './components/TablaInmobiliaria'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div>
      <Header />
      <TablaInmobiliaria />
    </div>
  );
};

export default App;
