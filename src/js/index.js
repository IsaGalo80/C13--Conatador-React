//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import ContadorFuncion from "./component/contador.jsx";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let contador=0;
setInterval (function(){
    let n1 = Math.floor(contador/1);
    let n2 = Math.floor(contador/10);
    let n3 = Math.floor(contador/100);
    let n4 = Math.floor(contador/1000);
    let n5 = Math.floor(contador/10000);
    let n6 = Math.floor(contador/100000);
   
      contador++ 
      ReactDOM.render(<ContadorFuncion
        posicion1={n1} posicion2={n2} posicion3={n3} posicion4={n4} posicion5={n5} posicion6={n6}
        />, document.querySelector("#app"));

    },1000);

