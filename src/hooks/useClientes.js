import { useEffect, useState } from 'react';

export const useClientes = () => {
    const [clientes, setClientes] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3001/clientes")
        .then((response) => response.json())
        .then((data) => setClientes(data))
        .catch((error) => console.error('Error fetching clientes:', error));
    }, []);

    return clientes;
}