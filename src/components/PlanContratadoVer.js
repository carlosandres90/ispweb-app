import React from "react";
import '../styles/plancontratadover.css';

function PlanContratadoVer(){
    return (
        <div class="form-container-PCV">
            <h2>PLAN CONTRATADO</h2>
            <form class="form-PCV">
                <div class="form-group-PCV">                 
                    <label class="label-Plan-PCV" for="plan">PLAN:</label>
                    <input class="input-Plan-PCV" type="text" id="plan" name="plan" required/>
                </div>
                <div class="form-group-PCV">
                    <label class="label-Precio-PCV" for="precio">PRECIO:</label>
                    <input class="input-Precio-PCV" type="text" id="precio" name="precio" required/>
                </div>              
                
            </form>
        </div>
    );
}

export default PlanContratadoVer;