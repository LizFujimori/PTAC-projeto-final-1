import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function registro() {
    const listaLocalStorage = JSON.parse (localStorage.getItem("Lista"))
    const [lista, setLista] = useState (listaLocalStorage);
    const [id, setId] = useState (listaLocalStorage [listaLocalStorage.lenght - 1]?.id + 1 || 1);
    const [Titulo, setTitulo] = useState ("");
    const [Descricao, setDescricao] = useState ("");
    const [Canal, setCanal] = useState ("");
    const [url, setUrl] = useState ("");

    useEffect (() => {localStorage.setItem ("Lista", JSON.stringify(lista))}, [lista]);
    
}