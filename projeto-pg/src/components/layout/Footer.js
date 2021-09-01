import React from 'react';
import './Footer.css'


var nome = 'Direitos reservados Leal Code /> 👾'

export default function Footer() {
    return(
        <>
            <div className='boxFooter'>
                <h1>{nome}</h1>
            </div>
            <a className='boxGit' href="https://github.com/flealbrl" target="_blank"> 
                <i class="fa fa-github" aria-hidden="true"></i> 
            </a>
        </>
    )}