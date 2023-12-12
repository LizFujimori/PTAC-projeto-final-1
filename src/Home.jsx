import './home.css';
import Card from './card';

export default function Home(){
    const videos = JSON.parse(localStorage.getItem('Lista')) || [];
    console.log(videos);
    return(
        <div>
            <body>
                <div  class="container">
                    <nav class="sidebar">
                        <ul>
                            <li><Link to="./Home">Home</Link></li>
                            <li><Link to="./destaque"></Link>Destaques</li>
                            <li><Link to="./registro">Adicionar Vídeo</Link></li>
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