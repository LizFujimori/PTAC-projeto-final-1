import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';  // Import Link here
import Card from './card';
import './home.css';

export default function Detalhe() {  // Corrected the function name to start with a capital letter
    const { id } = useParams();
    const video = JSON.parse(localStorage.getItem('Lista')) || [];
    const videos = video.find((objeto) => objeto.id == id) || null;

    return (
        <div>
            <body>
                <div className="container">  {/* Corrected class to className */}
                    <nav className="sidebar">  {/* Corrected class to className */}
                        <ul>
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/destaque">Destaques</Link></li>  {/* Fixed Link usage */}
                            <li><Link to="/registro">Adicionar Vídeo</Link></li>
                        </ul>
                    </nav>
                    <Card item={videos}></Card>
                </div>
            </body>
        </div>
    );
}
