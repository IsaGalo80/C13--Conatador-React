import React from "react";
import "../../styles/estilos.css";
// Importar las paginas de eventos
import ContadorFuncion from "./contador.jsx";

let contador = 0;


//create your first component
const Home = () => {
    return (
        <>
        <ContadorFuncion posicion1={n1} posicion2={n2} posicion3={n3} posicion4={n4} posicion5={n5} posicion6={n6}/>
       
        
        </>
    );
}
export default Home;