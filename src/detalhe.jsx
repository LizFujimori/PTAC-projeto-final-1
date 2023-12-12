import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from "./card";
import "./home.css"

export default function detalhe(){
    const{id} = useParams();
    const videoP = JSON.parse(localStorage.getItem('Lista')) || [];
    const videoU = videoP.find((objeto) => objeto.id == id) || null;
    return(
        <div>
            <body>
                <div class= "container">
                    <nav class= "sidebar">
                        <ul>
                            <li><a href="./">Home</a></li>
                            <li><a href="/destaque"></a>Destaques</li>
                            <li><a href="/registro">Adicionar Vídeo</a></li>
                        </ul>
                    </nav>
                    <Card item={videoU}></Card>
                </div>
            </body>
        </div>
    )
}