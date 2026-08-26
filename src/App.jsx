import { useState } from "react";

import EscolherPrototipo from "./components/escolherPrototipo/EscolherPrototipo";
import CameraPrototipo from "./components/camera/CameraPrototipo";
import EntradaModoAula from "./components/camera/1entradaModoAula/EntradaModoAula";
import ConfigurarCurso from "./components/camera/2configurarcurso/ConfigurarCurso";
import ConfigurarAulas from "./components/camera/3configurarcurso/ConfigurarAulas";
import Revisar from "./components/camera/4revisarcronograma/Revisar";
import Organizar from "./components/camera/5organizarconteudos/Organizar";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  const [entradaModoAulaAberta, setEntradaModoAulaAberta] =
    useState(false);

  const [configurarCursoAberta, setConfigurarCursoAberta] =
    useState(false);

  const [configuracaoAulasAberta, setConfiguracaoAulasAberta] =
    useState(false);

  const [revisaoAberta, setRevisaoAberta] =
    useState(false);

  const [organizacaoConteudosAberta, setOrganizacaoConteudosAberta] =
    useState(false);

  const [formaOrganizacao, setFormaOrganizacao] =
    useState("");

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

  function fecharTodasAsTelas() {
    setEntradaModoAulaAberta(false);
    setConfigurarCursoAberta(false);
    setConfiguracaoAulasAberta(false);
    setRevisaoAberta(false);
    setOrganizacaoConteudosAberta(false);
  }

  function abrirCamera() {
    setTelaAtual("camera");
  }

  function voltarParaEscolhaPrototipo() {
    fecharTodasAsTelas();
    setTelaAtual("escolha");
  }

  function abrirEntradaModoAula() {
    fecharTodasAsTelas();
    setEntradaModoAulaAberta(true);
  }

  function fecharEntradaModoAula() {
    setEntradaModoAulaAberta(false);
  }

  function configurarModoAula() {
    fecharTodasAsTelas();
    setConfigurarCursoAberta(true);
  }

  function voltarParaEntradaModoAula() {
    fecharTodasAsTelas();
    setEntradaModoAulaAberta(true);
  }

  function continuarConfiguracaoCurso() {
    fecharTodasAsTelas();
    setConfiguracaoAulasAberta(true);
  }

  function voltarParaConfigurarCurso() {
    fecharTodasAsTelas();
    setConfigurarCursoAberta(true);
  }

  function continuarConfiguracaoAulas() {
    fecharTodasAsTelas();
    setRevisaoAberta(true);
  }

  function voltarParaConfigurarAulas() {
    fecharTodasAsTelas();
    setConfiguracaoAulasAberta(true);
  }

  function editarCurso() {
    fecharTodasAsTelas();
    setConfigurarCursoAberta(true);
  }

  function editarAulas() {
    fecharTodasAsTelas();
    setConfiguracaoAulasAberta(true);
  }

  function continuarParaOrganizacao() {
    fecharTodasAsTelas();
    setOrganizacaoConteudosAberta(true);
  }

  function voltarParaRevisao() {
    fecharTodasAsTelas();
    setRevisaoAberta(true);
  }

  function finalizarConfiguracao() {
    fecharTodasAsTelas();

    const configuracaoModoAula = {
      curso: curso,
      aulas: aulas,
      formaOrganizacao: formaOrganizacao,
    };

    console.log("Configuração:", configuracaoModoAula);

    alert("Modo Aula ativado com sucesso!");
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

        <Revisar
          aberto={revisaoAberta}
          curso={curso}
          aulas={aulas}
          onVoltar={voltarParaConfigurarAulas}
          onEditarCurso={editarCurso}
          onEditarAulas={editarAulas}
          onFinalizar={continuarParaOrganizacao}
        />

        <Organizar
          aberto={organizacaoConteudosAberta}
          valor={formaOrganizacao}
          onAlterar={setFormaOrganizacao}
          onVoltar={voltarParaRevisao}
          onFinalizar={finalizarConfiguracao}
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