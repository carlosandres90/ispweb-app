import React, { useEffect, useState }from "react";
import '../styles/registrarpago.css';



function RegistrarPago({ usuario }){

    const [pago, setPago] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [setCodigo] = useState(usuario.codigo);
    const [mensaje, setMensaje] = useState('');

    const validarEntrada = () => {
        let errores = [];

        if (cuenta.trim() !== cuenta) {
            errores.push("El tipo de cuenta no debe tener espacios al inicio o al final.");
        }

        // Validar tipo cuenta (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.-]+$/.test(cuenta)) {
            errores.push("El tipo de cuenta contiene caracteres inválidos.");
        }

        // Validar precio (solo números con hasta 2 decimales)
        if (!/^\d+(\.\d{1,2})?$/.test(pago)) {
            errores.push("El precio debe ser un número decimal válido con hasta 2 decimales.");
        }

        // Validar dirección (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.\-áéíóúÁÉÍÓÚñÑ]+$/.test(descripcion)) {
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
        if (usuario) {
            setMensaje('');
            setPago('');
            setCuenta('');
            setDescripcion('');
        }
    }, [usuario]);  // Esto asegura que se actualicen los valores cuando cambia el usuario

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarEntrada()) {
            return;
        }

        const dataI = {
            targetMethod: "POST",
            body: {
                usuarioCodigo: usuario.codigo,
                valor: limpiarEntrada(pago),
                descripcion: limpiarEntrada(descripcion),
                tipoCuenta: limpiarEntrada(cuenta),
                responsable: "Administrador"
            }
          };

        fetch('/api/pagos/pago', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataI),
          })
        .then(response => response.json())
        .then(data => {
            setMensaje('Pago registrado con éxito');
            console.log('Pago agregado:', data);
            setCodigo(usuario.codigo);
            setPago('');
            setCuenta('');
            setDescripcion('');
        })
      .catch(error => console.error('Error registrando pago:', error));
    };

    return (
        <div className="form-container-Rp">
            <form className="form-Rp" onSubmit={handleSubmit}>
                <div className="form-group-Rp">
                    <label className="label-Rp" htmlFor="pago">PAGO:</label>
                    <input 
                    className="input-Rp" 
                    type="number" 
                    id="pago" 
                    name="pago" 
                    value={pago}
                    onChange={(e) => setPago(e.target.value)} 
                    required />
                </div>
                
                <div className="form-group-Rp">
                    <label className="label-Rp" htmlFor="tipo-cuenta">TIPO DE CUENTA:</label>
                    <input 
                    className="input-Rp" 
                    type="text" 
                    id="tipo-cuenta" 
                    name="tipo-cuenta" 
                    value={cuenta}
                    onChange={(e) => setCuenta(e.target.value)} 
                    required />
                </div>
                <div className="form-group-Rp">
                    <label className="label-Rp" htmlFor="descripcion">DESCRIPCIÓN:</label>
                    <input 
                    className="input-Rp" 
                    type="text" 
                    id="descripcion" 
                    name="descripcion" 
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)} 
                    required />
                </div>                
                <button className="button-Rp" type="submit">REGISTRAR</button>
            </form>
            {mensaje && <h2>{mensaje}</h2>}
        </div>
    );
}

export default RegistrarPago;