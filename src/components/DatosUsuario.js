import React, { useState, useEffect } from "react";
import '../styles/datosusuario.css';

function DatosUsuario({ cliente }) {
    const [codigo, setCodigo] = useState('');
    const [plan, setPlan] = useState('');
    const [precio, setPrecio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [planes, setPlanes] = useState([]); // Estado para almacenar los planes obtenidos
    const [setCedula] = useState(cliente.cedula);

    useEffect(() => {
        // Función para obtener los planes de la API
        const obtenerPlanes = async () => {
            try {
                const response = await fetch('http://192.168.100.141:3001/planes');
                const data = await response.json();
                setPlanes(data); // Almacenar los planes en el estado
            } catch (error) {
                console.error('Error obteniendo los planes:', error);
            }
        };

        obtenerPlanes(); // Llamar a la función para obtener los planes al montar el componente
    }, []);

    // Maneja el cambio en el select de plan y actualiza el estado de plan y precio
    const handlePlanChange = (e) => {
        const selectedPlan = planes.find(p => p.anchobanda === e.target.value);
        setPlan(selectedPlan.anchobanda);
        setPrecio(selectedPlan.precio); // Ajustar el estado del precio basado en el plan seleccionado
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://192.168.100.141:3001/usuarios', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ codigo, plan, precio, direccion, cedula: cliente.cedula }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Usuario agregado:', data);
            setCodigo('');
            setPlan('');
            setPrecio('');
            setDireccion('');
            setCedula(cliente.cedula);
        })
        .catch(error => console.error('Error agregando usuario:', error));
    };

    return (
        <div className="form-container-DU">
            <h2>DATOS DEL USUARIO</h2>
            <form className="form-DU" onSubmit={handleSubmit}>
                <div className="form-group-DU">
                    <label className="label-DU" htmlFor="codigo">CODIGO:</label>
                    <input 
                        className="input-DU" 
                        type="text" 
                        id="codigo" 
                        name="codigo"
                        value={codigo} 
                        onChange={(e) => setCodigo(e.target.value)}  
                        required
                    />
                </div>
                <div className="form-group-DU">
                    <label className="label-DU" htmlFor="plan">PLAN:</label>
                    <select 
                        className="select-DU" 
                        id="plan" 
                        name="plan" 
                        value={plan} 
                        onChange={handlePlanChange} 
                        required
                    >
                        <option value="">Selecciona un plan...</option>
                        {planes.map((planItem) => (
                            <option key={planItem.id} value={planItem.anchobanda}>
                                {planItem.anchobanda}
                            </option>
                        ))}
                    </select>
                    <label className="label-Precio-DU" htmlFor="precio">PRECIO:</label>
                    <input 
                        className="input-Precio-DU" 
                        type="text" 
                        id="precio" 
                        name="precio" 
                        value={precio} 
                        onChange={(e) => setPrecio(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group-DU">
                    <label className="label-DU" htmlFor="direccion">DIRECCIÓN:</label>
                    <input 
                        className="input-dir-DU" 
                        type="text" 
                        id="direccion" 
                        name="direccion" 
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)} 
                        required
                    />
                </div>
                <button className="button-DU" type="submit">INGRESAR</button>
            </form>
        </div>
    );
}

export default DatosUsuario;