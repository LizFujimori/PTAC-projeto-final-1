import React from 'react';
import {Link} from 'react-router-dom';
import "./home.css";

export default function Card({ item}) {
    const videoTela = item.url.slice(18)
    return(
        <Link to={'/detalhe/${item.id}'}>
            <div className="video-card">
                <iframe></iframe>
            </div>
        </Link>
    )
}