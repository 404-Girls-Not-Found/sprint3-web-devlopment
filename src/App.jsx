import { useState } from "react";

import EscolherPrototipo from "./components/escolherPrototipo/EscolherPrototipo";

import CameraPrototipo from "./components/camera/CameraPrototipo";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  if (telaAtual === "camera") {
    return (
      <CameraPrototipo onVoltar={() => setTelaAtual("escolha")} />
    );
  }

  return (
    <EscolherPrototipo onAbrirCamera={() => setTelaAtual("camera")}/>
  );
}

export default App;
