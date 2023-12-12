import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function registro() {
    const listaLocalStorage = JSON.parse (localStorage.getItem("Lista"))
    const [lista, setLista] = useState (listaLocalStorage);
    const [id, setId] = useState (listaLocalStorage [listaLocalStorage.lenght - 1]?.id + 1 || 1);
    const [Titulo, setTitulo] = useState ("");
    const [Descricao, setDescricao] = useState ("");
    const [Canal, setCanal] = useState ("");
    const [Url, setUrl] = useState ("");

    useEffect (() => {localStorage.setItem ("Lista", JSON.stringify(lista))}, [lista]);
    function salve(e) {
        e.preventDefault();
        setLista ([...lista, {id: id, Titulo: Titulo, Descricao: Descricao, Canal: Canal, Url: Url}]);
        setId (id + 1);
        setTitulo ("");
        setDescricao ("");
        setCanal ("");
        setUrl ("")
    }

    return (
        <div>
            <div className= "card">
                <form onSubmit= {salve}>
                    <div className= "input-container">
                        <p><label htmlFor= "titulo"> Titulo: </label>
                            <input 
                                id= "titulo"
                                onChange= {(e) => setTitulo(e.target.value)}
                                type= "text"
                                value= {Titulo}/>
                        </p>
                        <p><label htmlFor= "descricao"> Descrição: </label>
                            <input 
                                id= "descricao"
                                onChange= {(e) => setDescricao(e.target.value)}
                                type= "text"
                                value= {Descricao}/>
                        </p>
                        <p><label htmlFor= "canal"> Canal: </label>
                            <input 
                                id= "canal"
                                onChange= {(e) => setCanal(e.target.value)}
                                type= "text"
                                value= {Canal}/>
                        </p>
                        <p><label htmlFor= "url"> Url: </label>
                            <input 
                                id= "url"
                                onChange= {(e) => setUrl(e.target.value)}
                                type= "text"
                                value= {Url}/>
                        </p>
                    </div>
                    <button> Salve </button>
                </form>
            </div>
        </div>
    )
}