import React, { useEffect, useState } from "react";
import '../styles/datosusuarioact.css';



function PlanContratado({ usuario }) {
    const [selectedPlan, setSelectedPlan] = useState(usuario.anchoBanda || '');
    const [precio, setPrecio] = useState(usuario.precio || '');
    const [direccion, setDireccion] = useState(usuario.direccion || '');
    const [planes, setPlanes] = useState([]);
    const [mensaje, setMensaje] = useState('');

    const validarEntrada = () => {
        let errores = [];

        if (direccion.trim() !== direccion) {
            errores.push("La dirección no debe tener espacios al inicio o al final.");
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

    // Efecto para establecer el plan y el precio del usuario actual
    useEffect(() => {
        if (usuario) {
            setSelectedPlan(usuario.anchoBanda || '');
            setPrecio(usuario.precio || '');
            setDireccion(usuario.direccion || '');
            setMensaje('');
        }
    }, [usuario]);  // Esto asegura que se actualicen los valores cuando cambia el usuario



    useEffect(() => {
        // Función para obtener los planes de la API
        const obtenerPlanes = async () => {
            try {
                const data1 = {
                    targetMethod: "GET",
                };

                const response = await fetch('/api/planes/plan', {
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
        const planSeleccionado = planes.find(p => p.anchoBanda === e.target.value);
        if (planSeleccionado) {
            setSelectedPlan(planSeleccionado.anchoBanda);
            setPrecio(planSeleccionado.precio);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarEntrada()) {
            return;
        }

        try {
            const data1 = {
                targetMethod: "PUT",
                body: {
                    anchoBanda: selectedPlan,
                    precio: precio,
                    direccion: limpiarEntrada(direccion)
                }
            };
            const response = await fetch(`/api/usuarios/${usuario.codigo}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
            });
            
            if (response.ok) {
                setMensaje("Usuario actualizado con éxito.");
            } else {
                throw new Error('Error actualizando el usuario.');
            }
        } catch (error) {
            console.error('Error actualizando el usuario:', error);
            setMensaje("Error al actualizar el usuario.");
        }
    };

    // Verifica si el plan del usuario actual está en la lista de planes
    const usuarioPlanNoDisponible = usuario.anchoBanda && !planes.some(p => p.anchoBanda === usuario.anchoBanda);

    return (
        <div className="form-container-DUA">
            <h2>SERVICIO CONTRATADO</h2>
            <form className="form-DUA" onSubmit={handleSubmit}>
                <div className="form-group-DUA">
                    <label className="label-DUA" htmlFor="plan">PLAN:</label>
                    <select
                        className="select-DUA"
                        id="plan"
                        name="plan"
                        value={selectedPlan}
                        onChange={handlePlanChange}
                    >
                        {usuarioPlanNoDisponible && (
                            <option value={usuario.anchoBanda}>
                                {usuario.anchoBanda}
                            </option>
                        )}

                        {planes.map(planItem => (
                            <option key={planItem.id} value={planItem.anchoBanda}>
                                {planItem.anchoBanda}
                            </option>
                        ))}
                    </select>
                    <label className="label-Precio-DUA" htmlFor="precio">PRECIO:</label>
                    <input 
                        className="input-Precio-DUA" 
                        type="number" 
                        id="precio" 
                        name="precio" 
                        value={precio} 
                        onChange={(e) => setPrecio(e.target.value)}  // Permite la edición manual del precio
                        required
                    />
                </div>
                <div className="form-group-DUA">
                    <label className="label-DUA" htmlFor="direccion">DIRECCIÓN:</label>
                    <input 
                        className="input-dir-DUA" 
                        type="text" 
                        id="direccion" 
                        name="direccion" 
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)}  // Permite la edición manual
                        required
                    />
                </div>
                <button className="button-act-DUA" type="submit">ACTUALIZAR</button>
                {mensaje && <h2 className="error-DUA">{mensaje}</h2>}
            </form>
        </div>
    );
}

export default PlanContratado;