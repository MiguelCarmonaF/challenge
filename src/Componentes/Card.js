import React from "react";
import "../stylesheets/card.css"

function Card(props){
    return(
    <>   
        <div className="size">
            <div className="card">
                <img 
                src={require(`../Imagenes/${props.imagen}.png`)}
                alt={props.descripcionImagen}
                />
                <div className="container">
                    <p className="texto-nombre">
                        {props.nombre}
                    </p>
                </div>
            </div>
            <div className="counter">
                <div>
                    <button className="button">
                    +
                    </button>
                </div>
                <div className="number">
                <p>Num</p>
                </div>
                <div>
                    <button className="button">
                    -
                    </button>
                </div>
            </div>
        </div>
    </> 
    );
}

export default Card;