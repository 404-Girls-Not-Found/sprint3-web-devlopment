import { useEffect, useRef, useState } from "react";

import EscolherPrototipo from "./components/escolherprototipo/EscolherPrototipo";

import EntradaModoAula from "./components/camera/1entradamodoaula/EntradaModoAula";
import ConfigurarCurso from "./components/camera/2configurarcurso/ConfigurarCurso";
import ConfigurarAulas from "./components/camera/3configuraraulas/ConfigurarAulas";
import Revisar from "./components/camera/4revisarcronograma/Revisar";
import Organizar from "./components/camera/5organizarconteudos/Organizar";
import ModoAulaAtivo from "./components/camera/6modoaula/ModoAulaAtivo";

import {
  ZapOff,
  ChevronUp,
  EyeOff,
  Focus,
  Images,
  Menu,
  MicOff,
  RefreshCw,
  Settings,
} from "lucide-react";

import "./index.css";

function App() {
  const [telaAtual, setTelaAtual] = useState("escolha");

  const [
    entradaModoAulaAberta,
    setEntradaModoAulaAberta,
  ] = useState(false);

  const [
    configuracaoCursoAberta,
    setConfiguracaoCursoAberta,
  ] = useState(false);

  const [
    configuracaoAulasAberta,
    setConfiguracaoAulasAberta,
  ] = useState(false);

  const [
    revisaoConfiguracaoAberta,
    setRevisaoConfiguracaoAberta,
  ] = useState(false);

  const [
    organizacaoConteudosAberta,
    setOrganizacaoConteudosAberta,
  ] = useState(false);

  const [modoAulaAtivo, setModoAulaAtivo] =
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

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const modosCamera = [
    "Noite",
    "Retrato",
    "Foto",
    "Vídeo",
    "Microfilme",
  ];

  async function iniciarCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      alert(
        "A câmera e o microfone precisam de uma conexão HTTPS para funcionar."
      );

      return;
    }

    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: {
              ideal: "environment",
            },
          },
          audio: true,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (erro) {
      console.error(
        "Erro ao acessar câmera e microfone:",
        erro
      );

      alert(
        "Não foi possível acessar a câmera e o microfone. Verifique as permissões do navegador."
      );
    }
  }

  function pararCamera() {
    streamRef.current
      ?.getTracks()
      .forEach((track) => {
        track.stop();
      });

    streamRef.current = null;

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }

  function abrirEntradaModoAula() {
    setEntradaModoAulaAberta(true);
  }

  function fecharEntradaModoAula() {
    setEntradaModoAulaAberta(false);
  }

  function configurarModoAula() {
    setEntradaModoAulaAberta(false);
    setConfiguracaoCursoAberta(true);
  }

  function voltarParaEntradaModoAula() {
    setConfiguracaoCursoAberta(false);
    setEntradaModoAulaAberta(true);
  }

  function continuarConfiguracao() {
    setConfiguracaoCursoAberta(false);
    setConfiguracaoAulasAberta(true);
  }

  function voltarParaConfigurarCurso() {
    setConfiguracaoAulasAberta(false);
    setConfiguracaoCursoAberta(true);
  }

  function continuarAulas() {
    setConfiguracaoAulasAberta(false);
    setRevisaoConfiguracaoAberta(true);
  }

  function voltarParaConfigurarAulas() {
    setRevisaoConfiguracaoAberta(false);
    setConfiguracaoAulasAberta(true);
  }

  function editarCurso() {
    setRevisaoConfiguracaoAberta(false);
    setConfiguracaoCursoAberta(true);
  }

  function editarAulas() {
    setRevisaoConfiguracaoAberta(false);
    setConfiguracaoAulasAberta(true);
  }

  function continuarParaOrganizacao() {
    setRevisaoConfiguracaoAberta(false);
    setOrganizacaoConteudosAberta(true);
  }

  function voltarParaRevisao() {
    setOrganizacaoConteudosAberta(false);
    setRevisaoConfiguracaoAberta(true);
  }

  function finalizarConfiguracao() {
    setOrganizacaoConteudosAberta(false);
    setModoAulaAtivo(true);
  }

  function sairModoAula() {
    setModoAulaAtivo(false);
  }

  function reabrirConfiguracoes() {
    setModoAulaAtivo(false);
    setConfiguracaoCursoAberta(true);
  }

  function abrirPrototipoCamera() {
    setTelaAtual("camera");
  }

  function abrirPrototipoAplicativo() {
    setTelaAtual("aplicativo");
  }

  function voltarParaEscolhaPrototipo() {
    setModoAulaAtivo(false);
    setEntradaModoAulaAberta(false);
    setConfiguracaoCursoAberta(false);
    setConfiguracaoAulasAberta(false);
    setRevisaoConfiguracaoAberta(false);
    setOrganizacaoConteudosAberta(false);
    setTelaAtual("escolha");
  }

  useEffect(() => {
    if (telaAtual !== "camera") {
      pararCamera();
      return;
    }

    iniciarCamera();

    return () => {
      pararCamera();
    };
  }, [telaAtual]);

  if (telaAtual === "escolha") {
    return (
      <EscolherPrototipo
        onAbrirCamera={abrirPrototipoCamera}
        onAbrirAplicativo={abrirPrototipoAplicativo}
      />
    );
  }

  if (telaAtual === "aplicativo") {
    return (
      <AplicativoPrototipo
        onVoltar={voltarParaEscolhaPrototipo}
        onAbrirCamera={abrirPrototipoCamera}
      />
    );
  }

  return (
    <main className="pagina">
      <section className="camera">
        <header
          className={
            modoAulaAtivo
              ? "camera_topo camera_interface_oculta"
              : "camera_topo"
          }
        >
          <button
            className="botao-icone"
            type="button"
            aria-label="Foco"
          >
            <Focus size={19} />
          </button>

          <button
            className="botao-icone"
            type="button"
            aria-label="Flash desligado"
          >
            <ZapOff size={19} />
          </button>

          <button
            className="botao-icone"
            type="button"
            aria-label="Efeitos desligados"
          >
            <EyeOff size={19} />
          </button>

          <strong className="logo-camera">
            ZEISS
          </strong>

          <button
            className="botao-icone"
            type="button"
            aria-label="Microfone desligado"
          >
            <MicOff size={19} />
          </button>

          <button
            className="botao-icone"
            type="button"
            onClick={voltarParaEscolhaPrototipo}
            aria-label="Trocar protótipo"
          >
            <Settings size={19} />
          </button>
        </header>

        <div className="camera_visualizacao">
          <video
            ref={videoRef}
            className="camera_video"
            autoPlay
            playsInline
            muted
          />

          {!modoAulaAtivo && (
            <>
              <button
                className="botao-modo-aula"
                type="button"
                onClick={abrirEntradaModoAula}
              >
                Modo Aula
              </button>

              <div className="camera_informacoes">
                <span>0,5x</span>

                <span className="zoom-ativo">
                  1x
                </span>

                <span>2x</span>
              </div>
            </>
          )}
        </div>

        <section
          className={
            modoAulaAtivo
              ? "camera_controles camera_interface_oculta"
              : "camera_controles"
          }
        >
          <nav
            className="camera_modos"
            aria-label="Modos da câmera"
          >
            {modosCamera.map((modo) => (
              <button
                key={modo}
                className={
                  modo === "Foto"
                    ? "modo modo--ativo"
                    : "modo"
                }
                type="button"
              >
                {modo}
              </button>
            ))}
          </nav>

          <div className="camera_acoes">
            <button
              className="botao-galeria"
              type="button"
              aria-label="Abrir galeria"
            >
              <Images size={23} />
            </button>

            <button
              className="botao-capturar"
              type="button"
              aria-label="Tirar foto"
            >
              <span />
            </button>

            <button
              className="botao-inverter"
              type="button"
              aria-label="Inverter câmera"
            >
              <RefreshCw size={24} />
            </button>
          </div>

          <button
            className="botao-expandir"
            type="button"
            aria-label="Expandir controles"
          >
            <ChevronUp size={25} />
          </button>

          <footer className="navegacao-celular">
            <Menu size={18} />

            <span className="botao-home" />

            <ChevronUp
              className="botao-voltar"
              size={20}
            />
          </footer>
        </section>

        <EntradaModoAula
          aberto={entradaModoAulaAberta}
          onFechar={fecharEntradaModoAula}
          onConfigurar={configurarModoAula}
        />

        <ConfigurarCurso
          aberto={configuracaoCursoAberta}
          curso={curso}
          onAlterarCurso={setCurso}
          onVoltar={voltarParaEntradaModoAula}
          onContinuar={continuarConfiguracao}
        />

        <ConfigurarAulas
          aberto={configuracaoAulasAberta}
          aulas={aulas}
          onAlterarAulas={setAulas}
          onVoltar={voltarParaConfigurarCurso}
          onContinuar={continuarAulas}
        />

        <Revisar
          aberto={revisaoConfiguracaoAberta}
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

        <ModoAulaAtivo
          aberto={modoAulaAtivo}
          curso={curso}
          aulas={aulas}
          onSair={sairModoAula}
          onAbrirConfiguracoes={reabrirConfiguracoes}
        />
      </section>
    </main>
  );
}

export default App;