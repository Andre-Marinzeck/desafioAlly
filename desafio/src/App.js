import { DadosPessoais } from "./componets/dados";
import Destinos from "./componets/destinos";
import { Container, Form, GlobalStyle } from "./style";

function App() {
  return (
    <Container>
      <GlobalStyle  />
      <h1>Destinos de Interesse</h1>
      <div>
        <Form>
          <div>
            <DadosPessoais />
          </div>
          <div>
            <Destinos />
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default App;
