import { useState } from 'react';

export const useBuscarPorUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarUsuarioPorCodigo = async (codigo) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/usuarios/buscarCodigo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigo }),
      });

      
      if (!response.ok) {
        throw new Error('USUARIO NO ENCONTRADO');
      }

      const data = await response.json();
      setUsuario(data);
      return data;
    } catch (error) {
      setError(error.message);
      setUsuario(null);
    } finally {
      setLoading(false);
    }
  };

  return { usuario, loading, error, buscarUsuarioPorCodigo };
};