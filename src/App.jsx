import { useState } from "react";

import EscolherPrototipo from "./components/escolherPrototipo/EscolherPrototipo";
import CameraPrototipo from "./components/camera/CameraPrototipo";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  function abrirCamera() {
    setTelaAtual("escolha");
  }

  function voltarParaEscolhaPrototipo() {
    setTelaAtual("escolha");
  }

  if (telaAtual === "camera") {
    return (
      <CameraPrototipo onVoltar={voltarParaEscolhaPrototipo} />
    );
  }

  return (
    <EscolherPrototipo onAbrirCamera={() => setTelaAtual("camera")}/>
  );
}

export default App;
