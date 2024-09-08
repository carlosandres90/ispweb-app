import { useState } from 'react';

export const useBuscarPorCedula = () => {
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarClientePorCedula = async (cedula) => {
    setLoading(true);
    setError(null);
    try {
        
      const response = await fetch(`/api/clientes/${codigo}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({targetMethod: "GET"}),
      });

      if (!response.ok) {
        throw new Error('CLIENTE NO ENCONTRADO');
      }

      const data = await response.json();
      setCliente(data);
      return data;
    } catch (error) {
      setError(error.message);
      setCliente(null);
    } finally {
      setLoading(false);
    }
  };

  return { cliente, loading, error, buscarClientePorCedula };
};

