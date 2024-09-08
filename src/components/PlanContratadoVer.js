import React from "react";
import '../styles/plancontratadover.css';

function PlanContratadoVer(){
    return (
        <div className="form-container-PCV">
            <h2>PLAN CONTRATADO</h2>
            <form className="form-PCV">
                <div className="form-group-PCV">                 
                    <label className="label-Plan-PCV" for="plan">PLAN:</label>
                    <input className="input-Plan-PCV" type="text" id="plan" name="plan" required/>
                </div>
                <div className="form-group-PCV">
                    <label className="label-Precio-PCV" for="precio">PRECIO:</label>
                    <input className="input-Precio-PCV" type="text" id="precio" name="precio" required/>
                </div>              
                
            </form>
        </div>
    );
}

export default PlanContratadoVer;