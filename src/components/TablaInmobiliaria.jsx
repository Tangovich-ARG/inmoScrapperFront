import React, { useState, useEffect } from 'react';

const TablaInmobiliaria = () => {
  const [inmobiliarias, setInmobiliarias] = useState([]);

  useEffect(() => {
    fetch('/resultados.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Datos cargados:', data);
        setInmobiliarias(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Listado de Inmuebles</h1>
      <table>
        <thead>
          <tr>
            <th>Precio</th>
            <th>Expensas</th>
            <th>Ambientes</th>
            <th>Dirección</th>
            <th>Descripción</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {inmobiliarias.length > 0 ? (
            inmobiliarias.map((inmobiliaria, index) => (
              <tr key={index}>
                <td>{inmobiliaria.Precio || 'No especificado'}</td>
                <td>{inmobiliaria.Expensas || 'No especificado'}</td>
                <td>{inmobiliaria.Ambientes || 'No especificado'}</td>
                <td>{inmobiliaria.Direccion || 'No especificado'}</td>
                <td>{inmobiliaria.Descripcion || 'No especificado'}</td>
                <td>
                  <a href={inmobiliaria.Url} target="_blank" rel="noopener noreferrer">
                    Ver más
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Cargando datos...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaInmobiliaria;
