import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function registro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"))
    const [lista, setLista] = useState(listaLocalStorage);
}