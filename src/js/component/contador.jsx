import React from "react";
import PropTypes from "prop-types";
const ContadorFuncion = (props) =>{
    return (
        <div className="contador">
            <div className="posicion4">{props.posicion4}</div>
            <div className="posicion3">{props.posicion3}</div>
            <div className="posicion2">{props.posicion2}</div>
            <div className="posicion1">{props.posicion1}</div>
        </div>
    );
}
ContadorFuncion.Prototype={
    posicion4: PropTypes.number,
    posicion3: PropTypes.number,
    posicion2: PropTypes.number,
    posicion1: PropTypes.number,
};
let contador = 0;
export default ContadorFuncion;