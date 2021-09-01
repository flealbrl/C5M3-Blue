import React, {useState} from 'react';

function BotaoVisita(){

    const [valor, setValor] = useState(0);
    

    function funcAumentar(){
        setValor(valor + 1); 
    }

    return (
        <div className="botaoV">
            <div>Visitas: {valor}</div>
            <button onClick={funcAumentar}>Já Visitei ✅</button>
        </div>
    );
}

export default BotaoVisita;