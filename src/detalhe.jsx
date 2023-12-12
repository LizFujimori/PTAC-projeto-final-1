import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './card';
import './home.css';

export default function detalhe(){
    const {id} = useParams();
    const videoP = JSON.parse(localStorage.getItem('videoP')) || [];
    const videoU = videoP.find((objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null;
    });
    console.log(videoP);

    return(
        <div>
            <body>
                <div class= "container">
                    <nav class= "sidebar">
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/destaque"></Link>Destaques</li>
                            <li><Link to="/registro">Adicionar Vídeo</Link></li>
                        </ul>
                    </nav>
                    <Card item={videoU}></Card>
                </div>
            </body>
        </div>
    )
}