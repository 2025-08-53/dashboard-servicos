import Header from "./components/Header";
import Contato from "./sections/Contato";
import Servicos from "./sections/Servicos";

function App() {
  return (
    <>
      <Header />
    <main>
      <Servicos />
      <Contato />
    </main>
    </>

   
  );
}

export default App;