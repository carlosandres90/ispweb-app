import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para la redirección
import '../styles/login.css';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    // Usuario y contraseña por defecto
    const usuarioPorDefecto = process.env.REACT_APP_USUARIO_DEFECTO;
    const contrasenaPorDefecto = process.env.REACT_APP_CONTRASENA_DEFECTO;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar el usuario y la contraseña
        if (usuario === usuarioPorDefecto && contrasena === contrasenaPorDefecto) {
            setMensaje('Inicio de sesión exitoso');
            // Redirigir a otra pantalla
            navigate('/principal'); // Cambia '/dashboard' por la ruta deseada
        } else {
            setMensaje('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group-login">
                    <label className='label-login' htmlFor="usuario">Usuario:</label>
                    <input
                        className='input-login'
                        type="text"
                        id="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group-login">
                    <label className='label-login' htmlFor="contrasena">Contraseña:</label>
                    <input
                        className='input-login'
                        type="password"
                        id="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                </div>
                <button className='button-login' type="submit">Iniciar Sesión</button>
            </form>
            {mensaje && <p className='p-login'>{mensaje}</p>}
        </div>
    );
}

export default Login;
