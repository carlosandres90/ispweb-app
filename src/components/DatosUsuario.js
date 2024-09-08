import React, { useState, useEffect } from "react";
import '../styles/datosusuario.css';

const apiUrl = process.env.REACT_APP_API_URL

function DatosUsuario({ cliente }) {
    const [codigo, setCodigo] = useState('');
    const [plan, setPlan] = useState('');
    const [precio, setPrecio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [planes, setPlanes] = useState([]); // Estado para almacenar los planes obtenidos
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (cliente) {
            setMensaje('');
        }
    }, [cliente]);

    const validarEntrada = () => {
        let errores = [];

        if (direccion.trim() !== direccion) {
            errores.push("La dirección no debe tener espacios al inicio o al final.");
        }
        if (codigo.trim() !== codigo) {
            errores.push("El código no debe tener espacios al inicio o al final.");
        }

        // Validar codigo (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.-]+$/.test(codigo)) {
            errores.push("El código contiene caracteres inválidos.");
        }

        // Validar precio (solo números con hasta 2 decimales)
        if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
            errores.push("El precio debe ser un número decimal válido con hasta 2 decimales.");
        }

        // Validar dirección (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.\-áéíóúÁÉÍÓÚñÑ]+$/.test(direccion)) {
            errores.push("La dirección contiene caracteres inválidos.");
        }

        if (errores.length > 0) {
            alert("Errores en el formulario:\n" + errores.join("\n"));
        }

        return errores.length === 0;
    };

    const limpiarEntrada = (str) => {
        return str.replace(/[<>{}]/g, ""); // Elimina caracteres potencialmente peligrosos
    };

    useEffect(() => {
        // Función para obtener los planes de la API
        const obtenerPlanes = async () => {
            try {
                const data1 = {
                    targetMethod: "GET",
                };

                const response = await fetch(`${apiUrl}/ms-planes/planes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data1)
                });

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
        const selectedPlan = planes.find(p => p.anchoBanda === e.target.value);
        setPlan(selectedPlan.anchoBanda);
        setPrecio(selectedPlan.precio); // Ajustar el estado del precio basado en el plan seleccionado
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarEntrada()) {
            return;
        }

        const data1 = {
            targetMethod: "POST",
            body: {
                cedula: cliente.cedula,
                codigo: limpiarEntrada(codigo),
                anchoBanda: plan,
                precio: precio,
                direccion: limpiarEntrada(direccion)
            }
          };

        fetch(`${apiUrl}/ms-usuarios/usuarios`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Usuario agregado:', data);
            setCodigo('');
            setPlan('');
            setPrecio('');
            setDireccion('');
            setMensaje('Usuario creado con éxito');
        })
        .catch(error => {
            console.error('Error agregando usuario:', error);
            setMensaje('Error al crear el usuario');
        });
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
                            <option key={planItem.id} value={planItem.anchoBanda}>
                                {planItem.anchoBanda}
                            </option>
                        ))}
                    </select>
                    <label className="label-Precio-DU" htmlFor="precio">PRECIO:</label>
                    <input 
                        className="input-Precio-DU" 
                        type="number" 
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
                {mensaje && <h2 className="error-DU">{mensaje}</h2>}
            </form>
        </div>
    );
}

export default DatosUsuario;