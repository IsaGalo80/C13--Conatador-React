import React from "react";
import PropTypes from "prop-types";
const ContadorFuncion = (props) => {
  return (
    <div className="coontainer">
      <div className="row">
        <div className="contador" >
        
            <div className="col posicion6">
              {props.posicion6 % 10}
            </div>
            <div className="col posicion5">
              {props.posicion5 % 10}
            </div>
            <div className="col  posicion4">
              {props.posicion4 % 10}
            </div>
            <div className="col posicion3">
              {props.posicion3 % 10}
            </div>
            <div className="col  posicion2">
              {props.posicion2 % 10}
            </div>
            <div className="col  posicion1">
              {props.posicion1 % 10}
            </div>
          
        </div>
      </div>
    </div>
  );
};
ContadorFuncion.propTypes = {
  posicion6: PropTypes.number,
  posicion5: PropTypes.number,
  posicion4: PropTypes.number,
  posicion3: PropTypes.number,
  posicion2: PropTypes.number,
  posicion1: PropTypes.number,
};

export default ContadorFuncion;
