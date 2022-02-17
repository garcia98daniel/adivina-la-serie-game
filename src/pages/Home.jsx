import React, { useState } from 'react';
import './styles/home.css'

function Home(props) {

    const series = [
        {
            emoji : "🚗💨😡",
            name : "rapido y furioso",
        },
        {
            emoji : "🚗",
            name : "Cars",
        },
        {
            emoji : "💨",
            name : "La niebla",
        },
    ]
    
    const [texto, setTexto] = useState("");
    const [puntos, setPuntos] = useState(0);
    const [vidas, setVidas] = useState(3);
    const [nivel, setNivel] = useState(0);

    const handleInput = (event) =>{
        setTexto(event.target.value);
    }

    const guest = () => {
        if(series[nivel].name === texto) {
            setPuntos(puntos + 1);
            setNivel(nivel + 1);
        }else{

            if(vidas > 0){
                setVidas(vidas - 1);
            }
        }

    }

    return (
        <div className="bg">
            <h1>vidas: {vidas}</h1>
            <h1>puntos: {puntos}</h1>

            { nivel > 2 ?
                <h1>GANASTE</h1>
                :
                <div>
                    <h1>{series[nivel].emoji}</h1>
                    <input type="text" placeholder="Adivina la serie" onChange={(event) => handleInput(event)}/>
                    <button onClick={() => guest()}> Send </button>
                </div>
            }
        </div>
    );
}

export default Home;