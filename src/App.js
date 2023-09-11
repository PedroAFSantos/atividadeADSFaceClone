import './App.css';
import Body from './components/Body';
import logo from "./logo.svg"

function App() {
  return (
    <div>
    <div className="Centro">
      <div className ="Position">
        <div className="PaginaCentral">
          <div className="Logo">
        <img src={logo} alt="Facebook"></img>
        <h2 className="Lema">O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h2>
        </div>
          <div className="Conteudo">
            <div className="TamanhoBody">
              <Body/>
            </div>
          </div>
        <div className="rodape">
        </div>
      </div>     
    </div>
    </div>
    </div>
  );
}

export default App;