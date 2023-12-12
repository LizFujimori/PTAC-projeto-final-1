import "./home.css";
import Card from "./card";


export default function destaque(){
    const videoP = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(videoP);
    return(
        <div>
            <body>
                <div class= "container">
                    <nav class= "sidebar">
                        <ul>
                            <li><a href="./">Home</a></li>
                            <li><a href="/destaque.jsx"></a>Destaques</li>
                            <li><a href="/registro">Adicionar Vídeo</a></li>
                        </ul>
                    </nav>
                    <div>
                        <div className= "values-area">
                            {videoP.slice(-4).map((item, index) => (
                                <div key= {item.id}>
                                    <Card key= {index} item= {item}></Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}