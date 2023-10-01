import React, { useEffect, useState } from 'react';

function LlamadoClientes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hacer la solicitud a la API en el momento de montaje del componente
    fetch('http://localhost:3001/api/data')
        .then((response) => response.json()) // Convierte la respuesta en JSON
        .then((responseData) => {
            // Almacenar los datos en el estado
            setData(responseData);
        })
        .catch((error) => {
            console.error('Error al cargar los datos:', error);
        });
  }, []);

  return (
    <div>
        <ul>
        {data?.clientes?.map((cliente, index) => (
            <li key={index}>
                <p>Nombre: {cliente.nombre}</p>
                <p>Datos:</p>
                <ul>
                    <li>a: {cliente.datos.a}</li>
                    <li>b: {cliente.datos.b}</li>
                </ul>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default LlamadoClientes;