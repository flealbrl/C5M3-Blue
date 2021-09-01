import React from 'react'

export default props  =>
    <>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <img src={props.imagem} width="600" height="400"/>
        <iframe width="500" height="350" src={props.video}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe src={props.loc} width="500" height="350"></iframe>
        <a href={props.button} target='_blank'><button className='botao3D'>Visite em 3D 📌</button></a>
    </>
