import React, { useState, useEffect } from "react";
import '../styles/actualizarplan.css';


function ActualizarPlan() {
    const [planes, setPlanes] = useState([]); // Estado para almacenar los planes obtenidos
    const [anchobanda, setAnchobanda] = useState('');
    const [precio, setPrecio] = useState('');
    const [selectedPlan, setSelectedPlan] = useState('');
    const [mensaje, setMensaje] = useState('');

    const validarEntrada = () => {
        let errores = [];

        if (anchobanda.trim() !== anchobanda) {
            errores.push("El ancho de banda no debe tener espacios al inicio o al final.");
        }

        // Validar precio (solo números con hasta 2 decimales)
        if (!/^\d+(\.\d{1,2})?$/.test(precio)) {
            errores.push("El precio debe ser un número decimal válido con hasta 2 decimales.");
        }

        // Validar ancho de banda (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.-]+$/.test(anchobanda)) {
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
                const response = await fetch('/api/planes/plan', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data1), // Envía la cédula en el cuerpo de la solicitud
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
        setSelectedPlan(e.target.value);
    };

    // BUSCAR EL PLAN
    const handleBuscarClick = async () => {
        try {
            const data2 = {
                targetMethod: "GET",
            };
            const response = await fetch(`/api/planes/${selectedPlan}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data2), // Envía la cédula en el cuerpo de la solicitud
            });
            if (!response.ok) {
                throw new Error('Error fetching plan details');
            }else
                setMensaje('');

            const planData = await response.json();
            setAnchobanda(planData.anchoBanda);
            setPrecio(planData.precio);
        } catch (error) {
            console.error('Error fetching plan details:', error);
        }
    };

    // ACTUALIZAR EL PLAN
    const handleActualizarClick = async (e) => {
        e.preventDefault();

        if (!validarEntrada()) {
            return;
        }

        try {
            const data3 = {
                targetMethod: "PUT",
                body: {
                    anchoBanda: limpiarEntrada(anchobanda),
                    precio: limpiarEntrada(precio)
                }
            };
            console.log(data3);
            const response = await fetch(`/api/planes/${selectedPlan}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data3),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el plan');
            }else
            {
                setMensaje('Plan actualizado con éxito');
            }

            console.log('Plan actualizado exitosamente');
        } catch (error) {
            console.error('Error al actualizar el plan:', error);
        }
    };

    return (
        <div className="form-container-AcPl">
            <div className="form-group-AcPl">
                <label className="label-AcPl" htmlFor="plan">PLAN:</label>
                <select className="select-AcPl" id="plan" value={selectedPlan} onChange={handlePlanChange}>
                    <option value="" disabled>Seleccione un plan</option>
                    {planes.map(plan => (
                        <option key={plan.id} value={plan.id}>{plan.anchoBanda}</option>
                    ))}
                </select>
                <button className="button-AcPl" onClick={handleBuscarClick}>Buscar</button>
            </div>
            {selectedPlan && (
                <form className="form-AcPl" onSubmit={handleActualizarClick}>
                    <div className="form-group-AcPl">
                        <label className="label-AcPl" htmlFor="ancho-banda">ANCHO DE BANDA:</label>
                        <input
                            className="input-AcPl"
                            type="text"
                            id="ancho-banda"
                            name="ancho-banda"
                            value={anchobanda}
                            onChange={(e) => setAnchobanda(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-AcPl">
                        <label className="label-AcPl" htmlFor="precio">PRECIO:</label>
                        <input
                            className="input-AcPl"
                            type="text"
                            id="precio"
                            name="precio"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
                    </div>
                    <button className="button-AcPl" type="submit">ACTUALIZAR</button>
                </form>
            )}
            {mensaje && <h1>{mensaje}</h1>}
        </div>
    );
}

export default ActualizarPlan;