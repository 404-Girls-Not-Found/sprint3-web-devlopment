import { useState } from "react";

import EscolherPrototipo from "./components/escolherPrototipo/EscolherPrototipo";
import CameraPrototipo from "./components/camera/CameraPrototipo";
import EntradaModoAula from "./components/camera/1entradaModoAula/EntradaModoAula";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  const [entradaModoAulaAberta, setEntradaModoAulaAberta] = useState(false);

  function abrirCamera() {
    setTelaAtual("camera");
  }

  function voltarParaEscolhaPrototipo() {
    setEntradaModoAulaAberta(false);
    setTelaAtual("escolha");
  }

  function abrirEntradaModoAula() {
    setEntradaModoAulaAberta(true);
  }

  function fecharEntradaModoAula() {
    setEntradaModoAulaAberta(false);
  }

  function configurarModoAula () {
    setEntradaModoAulaAberta(false);
  }

  if (telaAtual === "camera") {
    return (
      <CameraPrototipo
      onVoltar={voltarParaEscolhaPrototipo}
      onAbrirModoAula={abrirEntradaModoAula}
      >

        <EntradaModoAula
          aberto={entradaModoAulaAberta}
          onFechar={fecharEntradaModoAula}
          onConfigurar={configurarModoAula}
        />
      </CameraPrototipo>
    );
  }

  return (
    <EscolherPrototipo onAbrirCamera={abrirCamera}/>
  );
}

export default App;
