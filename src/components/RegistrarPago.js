import React, { useState }from "react";
import '../styles/registrarpago.css';

function RegistrarPago({ usuario }){

    console.log(usuario.codigo);
    const [pago, setPago] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [setCodigo] = useState(usuario.codigo);
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/pagos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ codigo:usuario.codigo, pago, cuenta, descripcion }),
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
        <div class="form-container-Rp">
            <form class="form-Rp" onSubmit={handleSubmit}>
                <div class="form-group-Rp">
                    <label class="label-Rp" for="pago">PAGO:</label>
                    <input 
                    class="input-Rp" 
                    type="text" 
                    id="pago" 
                    name="pago" 
                    value={pago}
                    onChange={(e) => setPago(e.target.value)} 
                    required />
                </div>
                
                <div class="form-group-Rp">
                    <label class="label-Rp" for="tipo-cuenta">TIPO DE CUENTA:</label>
                    <input 
                    class="input-Rp" 
                    type="text" 
                    id="tipo-cuenta" 
                    name="tipo-cuenta" 
                    value={cuenta}
                    onChange={(e) => setCuenta(e.target.value)} 
                    required />
                </div>
                <div class="form-group-Rp">
                    <label class="label-Rp" for="descripcion">DESCRIPCIÓN:</label>
                    <input 
                    class="input-Rp" 
                    type="text" 
                    id="descripcion" 
                    name="descripcion" 
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)} 
                    required />
                </div>                
                <button class="button-Rp" type="submit">REGISTRAR</button>
            </form>
            {mensaje && <h2>{mensaje}</h2>}
        </div>
    );
}

export default RegistrarPago;