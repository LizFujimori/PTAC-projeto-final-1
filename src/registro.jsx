import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./home.css";

export default function registro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("lista")) || [];
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [canal, setCanal] = useState();
    const [url, setUrl] = useState();

    useEffect(() => {
        localStorage.setItem("lista", JSON.stringify(lista));
    }, [lista]);

    const salve = (e) => {
        e.preventDefault();
        setLista([
            ...lista,
            {
                id: id,
                titulo: titulo,
                descricao: descricao,
                canal: canal,
                url: url
            },
        ]);
        setId(id + 1);
        setTitulo("");
        setDescricao("");
        setCanal("");
        setUrl("");
    };

    return (
        <div class="input-container">
            <Link to="/">Home</Link>
            <form onSubmit={salve}>
                <h3> Titulo: </h3>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => {
                        setTitulo(e.target.value);
                    }}
                />

                <h3> Descrição: </h3>
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => {
                        setDescricao(e.target.value);
                    }}
                />

                <h3> Canal: </h3>
                <input
                    type="text"
                    value={canal}
                    onChange={(e) => {
                        setCanal(e.target.value);
                    }}
                />

                <h3> Url: </h3>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                    }}
                />
                <button> Salve </button>
            </form>
        </div>
    );
}
