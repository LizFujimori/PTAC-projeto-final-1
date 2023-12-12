import {  useState } from "react";
import { useEffect } from 'react';
import "./home.css";

export default function registro() {
    const listaLocalStorage = JSON.parse (localStorage.getItem("Lista"))
    const [lista, setLista] = useState (listaLocalStorage || []);
    const [id, setId] = useState (listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
    const [Titulo, setTitulo] = useState ();
    const [Descricao, setDescricao] = useState ();
    const [Canal, setCanal] = useState ();
    const [Url, setUrl] = useState ();

    useEffect (() => {
        localStorage.setItem ("lista", JSON.stringify(lista))
    }, [lista]);

    const salve = (e) => {
        e.preventDefault();
        setLista ([...lista, {
            id: id, 
            Titulo: Titulo, 
            Descricao: Descricao, 
            Canal: Canal, 
            Url: Url
        }]);
        setId (id + 1);
        setTitulo ("");
        setDescricao ("");
        setCanal ("");
        setUrl ("")
    }
    return (
        <div class="input-container">
            <Link to="/">Home</Link>
                <form onSubmit= {salve}>
                <h3> Titulo: </h3>
                    <input type="text"
                    value={Titulo}
                    onChange={(e) => { setTitulo(e.target.value) }}
                    />

                <h3> Descrição: </h3>
                    <input type="text"
                    value={Descricao}
                    onChange={(e) => { setDescricao(e.target.value) }}
                    />

                <h3> Canal: </h3>
                    <input type="text"
                    value={Canal}
                    onChange={(e) => { setCanal(e.target.value) }}
                />

                <h3> Url: </h3>
                    <input type="text"
                    value={Url}
                    onChange={(e) => { setUrl(e.target.value) }}
                />
                    <button> Salve </button>
                </form>
        </div>
    )
}