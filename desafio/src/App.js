
import { DadosPessoais } from "./componets/dados";
import Destinos from "./componets/destinos";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <div>
          <DadosPessoais/>
        </div>
        <div>
          <Destinos/>
          <button>Criar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
