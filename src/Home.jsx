import "./home.css"
import Card from "./card";

export default function Home(){
    const videos = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(videos);
    return(
        <div>
            <body>
                <div  class="container">
                    <nav class="sidebar">
                        <ul>
                            <li><a href="./">Home</a></li>
                            <li><a href="/destaque"></a>Destaques</li>
                            <li><a href="/registro">Adicionar Vídeo</a></li>
                        </ul>
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