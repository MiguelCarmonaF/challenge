import React from "react";
import "../stylesheets/card.css"

function Card({imagen,descripcionImagen,nombre,numClicks,sumarClicks,restarClicks}){
    return(
    <>   
        <div className="size">
            <div className="card">
                <img 
                src={require(`../Imagenes/${imagen}.png`)}
                alt={descripcionImagen}
                />
                <div className="container">
                    <p className="texto-nombre">
                        {nombre}
                    </p>
                </div>
            </div>
            <div className="counter">
                <div>
                    <button 
                    className="button"
                    onClick={sumarClicks}
                    >
                    +
                    </button>
                </div>
                <div className="number">
                <p>{numClicks}</p>
                </div>
                <div>
                    <button 
                    className="button"
                    onClick={restarClicks}
                    >
                    -
                    </button>
                </div>
            </div>
        </div>
    </> 
    );
}

export default Card;