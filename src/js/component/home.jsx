import React from "react";
import "../../styles/index.css";
// Importar las paginas de eventos
import ContadorFuncion from "./contador.jsx";
import Estilos from "./estilos.jsx";
import IconoContador from "./icono.jsx";
let n1 = 1
let n2 = 2
let n3 = 3
let n4 = 4
setInterval (function(){
    contador++;
},1000);
//create your first component
const Home = () => {
    return (
        <>
        <ContadorFuncion posicion1={n1} posicion2={n2} posicion3={n3} posicion4={n4}/>
        <IconoContador/>
        <Estilos/>
        </>
    );
}
export default Home;