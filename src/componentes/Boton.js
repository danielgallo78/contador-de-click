import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) {
    // todo: se necesita un texto, un valor true o false y una funcion para dar clic
    return (
       <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick = { manejarClic }>
            {texto}
        </button>
    );
}

export default Boton; 
