import React, { useEffect, useState } from "react";
import '../styles/datosusuarioact.css';

function PlanContratado({ usuario }){

    const [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        if (usuario) {
          setSelectedPlan(usuario.plan || ''); // Establece el plan predeterminado
        }
      }, [usuario]);

      const handlePlanChange = (e) => {
        setSelectedPlan(e.target.value);
      };
    
      console.log(usuario.plan)

    return (
        <div class="form-container-DUA">
            <h2>PLAN CONTRATADO</h2>
            <form class="form-DUA">
                <div class="form-group-DUA">
                <label className="label-DUA" htmlFor="plan">PLAN:</label>
                    <select
                        className="select-DUA"
                        id="plan"
                        name="plan"
                        value={selectedPlan}
                        onChange={handlePlanChange}
                    >
                        <option value="20M">20 Mbps</option>
                        <option value="30M">30 Mbps</option>
                        <option value="40M">40 Mbps</option>
                        <option value="50M">50 Mbps</option>
                    </select>
                    <label class="label-Precio-DUA" for="precio">PRECIO:</label>
                    <input class="input-Precio-DUA" type="text" id="precio" name="precio" value={usuario.precio} required/>
                </div>
                <div class="form-group-DUA">
                    <label class="label-DUA" for="direccion">DIRECCIÓN:</label>
                    <input class="input-dir-DUA" type="text" id="direccion" name="direccion" value={usuario.direccion} required/>
                </div>
                <div class="form-group-DUA">
                    <label class="label-DUA" for="estado">ESTADO:</label>
                    <select class="select-estado-DUA" id="estado" name="estado">
                        <option value="20M">ACTIVO</option>
                        <option value="30M">INACTIVO</option>
                    </select>
                </div>
                <div class="form-group-DUA">
                    <label class="label-DUA" for="motivo">MOTIVO:</label>
                    <input class="input-dir-DUA" type="text" id="motivo" name="motivo" required/>
                </div>
                <button class="button-act-DUA" type="submit">ACTUALIZAR</button>
            </form>
        </div>
    );
}

export default PlanContratado;