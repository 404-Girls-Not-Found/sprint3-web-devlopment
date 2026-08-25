import { useState } from "react";

import EscolherPrototipo from "./components/escolherPrototipo/EscolherPrototipo";
import CameraPrototipo from "./components/camera/CameraPrototipo";
import EntradaModoAula from "./components/camera/1entradaModoAula/EntradaModoAula";
import ConfigurarCurso from "./components/camera/2configurarcurso/ConfigurarCurso";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  const [entradaModoAulaAberta, setEntradaModoAulaAberta] = useState(false);

  const [configurarCursoAberta, setConfigurarCursoAberta] = useState(false);
  
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
    setEntradaModoAulaAberta(true);
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
