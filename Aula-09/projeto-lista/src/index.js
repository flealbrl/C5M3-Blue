import React, { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Produtos from './Produtos'

export default function Home(){
  return <h1>Meu primeiro React !</h1>
}

export function Texto(props){
  return <p>{props.texto}</p>
}

export function Botao(props){
  const [botao, setBotao] = useState(0);

  return( 
    <>
      <p>Número de Cliques: {botao}</p>
      <button onClick={() => setBotao(botao+1)}>{props.nome}</button>
    </>
  )
}

export function Paragrafos(){
  return (
    <>
      <Texto texto="Algo 01"/>
      <Texto texto="Algo 02"/>
      <Texto texto="Algo 03"/>
      <Texto texto="Algo 04"/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Texto texto="Texto de exemplo."/>
    <Texto texto="Olá React, tudo bom?"/>
    <Texto texto="Seja forte e percista."/>
    <Paragrafos/>
    <Produtos/>
    <Botao nome="Adicionar"/>
  </React.StrictMode>,
  document.getElementById('root')
);
