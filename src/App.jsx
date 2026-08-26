import { useState } from "react";

import EscolherPrototipo from "./components/escolherPrototipo/EscolherPrototipo";
import CameraPrototipo from "./components/camera/CameraPrototipo";
import EntradaModoAula from "./components/camera/1entradaModoAula/EntradaModoAula";
import ConfigurarCurso from "./components/camera/2configurarcurso/ConfigurarCurso";
import ConfigurarAulas from "./components/camera/3configurarcurso/ConfigurarAulas";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  const [entradaModoAulaAberta, setEntradaModoAulaAberta] =
    useState(false);

  const [configurarCursoAberta, setConfigurarCursoAberta] =
    useState(false);

  const [configuracaoAulasAberta, setConfiguracaoAulasAberta] =
    useState(false);

  const [curso, setCurso] = useState("");

  const [aulas, setAulas] = useState([
    {
      id: 1,
      materia: "",
      dia: "",
      horarioInicio: "",
      horarioFim: "",
    },
  ]);

  function abrirCamera() {
    setTelaAtual("camera");
  }

  function voltarParaEscolhaPrototipo() {
    setEntradaModoAulaAberta(false);
    setConfigurarCursoAberta(false);
    setConfiguracaoAulasAberta(false);

    setTelaAtual("escolha");
  }

  function abrirEntradaModoAula() {
    setEntradaModoAulaAberta(true);
    setConfigurarCursoAberta(false);
    setConfiguracaoAulasAberta(false);
  }

  function fecharEntradaModoAula() {
    setEntradaModoAulaAberta(false);
  }

  function configurarModoAula() {
    setEntradaModoAulaAberta(false);
    setConfigurarCursoAberta(true);
    setConfiguracaoAulasAberta(false);
  }

  function voltarParaEntradaModoAula() {
    setConfigurarCursoAberta(false);
    setConfiguracaoAulasAberta(false);
    setEntradaModoAulaAberta(true);
  }

  function continuarConfiguracaoCurso() {
    setEntradaModoAulaAberta(false);
    setConfigurarCursoAberta(false);
    setConfiguracaoAulasAberta(true);
  }

  function voltarParaConfigurarCurso() {
    setEntradaModoAulaAberta(false);
    setConfiguracaoAulasAberta(false);
    setConfigurarCursoAberta(true);
  }

  function continuarConfiguracaoAulas() {
    setConfiguracaoAulasAberta(false);

    console.log("Curso:", curso);
    console.log("Aulas:", aulas);

    alert("Curso e aulas configurados com sucesso!");
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

        <ConfigurarCurso
          aberto={configurarCursoAberta}
          curso={curso}
          onAlterarCurso={setCurso}
          onVoltar={voltarParaEntradaModoAula}
          onContinuar={continuarConfiguracaoCurso}
        />

        <ConfigurarAulas
          aberto={configuracaoAulasAberta}
          aulas={aulas}
          onAlterarAulas={setAulas}
          onVoltar={voltarParaConfigurarCurso}
          onContinuar={continuarConfiguracaoAulas}
        />
      </CameraPrototipo>
    );
  }

  return (
    <EscolherPrototipo
      onAbrirCamera={abrirCamera}
    />
  );
}

export default App;