import { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL

export const useBuscarPorUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarUsuarioPorCodigo = async (codigo) => {
    setLoading(true);
    setError(null);

    try {
      const dataI = {
        targetMethod: "GET",
      };

      const response = await fetch(`${apiUrl}/ms-usuarios/usuarios/${codigo}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataI),
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