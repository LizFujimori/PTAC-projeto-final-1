import './home.css';
import Card from './card';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import Link from react-router-dom

export default function Home(){
    const videos = JSON.parse(localStorage.getItem("lista")) || [];
    console.log(videos);
    return(
        <div>
            <body>
                <div  class="container">
                    <nav class="sidebar">
                        <Link to="/">Home</Link>
                        <Link to="/destaque">Destaques</Link>
                        <Link to="/registro">Adicionar Vídeo</Link>
                    </nav>
                    <div>
                        <div className="values-area">
                            {
                                videos.map((item, index) => (
                                    <div key={item.id}>
                                        <Card key={index} item={item}></Card>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </body>
        </div>
     );
}
