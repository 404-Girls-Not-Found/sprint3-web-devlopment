import { useEffect, useRef, useState } from "react";

import {
  BookOpen,
  ChevronUp,
  FileText,
  Images,
  LogOut,
  Menu,
  Mic,
  RefreshCw,
  Settings,
  Square,
  ZapOff,
} from "lucide-react";

import "./modoaula.css";

const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function converterParaMinutos(horario) {
  const [horas, minutos] = horario.split(":").map(Number);

  return horas * 60 + minutos;
}

function encontrarAulaAtiva(aulas) {
  const agora = new Date();
  const diaAtual = diasDaSemana[agora.getDay()];
  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

  return aulas.find((aula) => {
    if (
      aula.dia !== diaAtual ||
      !aula.horarioInicio ||
      !aula.horarioFim
    ) {
      return false;
    }

    const inicio = converterParaMinutos(aula.horarioInicio);
    const fim = converterParaMinutos(aula.horarioFim);

    return minutosAgora >= inicio && minutosAgora <= fim;
  });
}

function ModoAulaAtivo({
  aberto,
  curso,
  aulas,
  onSair,
  onAbrirConfiguracoes,
}) {
  const [modoSelecionado, setModoSelecionado] =
    useState("Foto");

  const [gravandoAudio, setGravandoAudio] =
    useState(false);

  const [segundosGravacao, setSegundosGravacao] =
    useState(0);

  const gravadorRef = useRef(null);
  const streamAudioRef = useRef(null);

  useEffect(() => {
    let intervalo;

    if (gravandoAudio) {
      intervalo = setInterval(() => {
        setSegundosGravacao((segundos) => segundos + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [gravandoAudio]);

  useEffect(() => {
    return () => {
      if (
        gravadorRef.current &&
        gravadorRef.current.state !== "inactive"
      ) {
        gravadorRef.current.stop();
      }

      streamAudioRef.current?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);

  if (!aberto) {
    return null;
  }

  const aulaAtiva = encontrarAulaAtiva(aulas);

  const materiaAtual =
    aulaAtiva?.materia ||
    aulas.find((aula) => aula.materia?.trim())?.materia ||
    curso ||
    "Modo Aula";

  const sessaoAtual = aulaAtiva
    ? `${aulaAtiva.dia} · ${aulaAtiva.horarioInicio} às ${aulaAtiva.horarioFim}`
    : "Nenhuma aula ativa agora";

  const modosAula = [
    "Foto",
    "Documento",
    "Áudio",
  ];

  function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    return `${String(minutos).padStart(2, "0")}:${String(
      segundosRestantes
    ).padStart(2, "0")}`;
  }

  async function iniciarGravacaoAudio() {
    if (gravandoAudio) {
      return;
    }

    try {
      const streamAudio =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      const gravador = new MediaRecorder(streamAudio);

      gravadorRef.current = gravador;
      streamAudioRef.current = streamAudio;

      gravador.onstop = () => {
        streamAudio.getTracks().forEach((track) => {
          track.stop();
        });
      };

      gravador.start();

      setSegundosGravacao(0);
      setGravandoAudio(true);
    } catch (erro) {
      console.error(
        "Não foi possível iniciar a gravação:",
        erro
      );

      alert(
        "Não foi possível acessar o microfone. Verifique as permissões do navegador."
      );
    }
  }

  function pararGravacaoAudio() {
    if (
      gravadorRef.current &&
      gravadorRef.current.state !== "inactive"
    ) {
      gravadorRef.current.stop();
    }

    streamAudioRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    setGravandoAudio(false);
    setSegundosGravacao(0);
  }

  function selecionarModo(modo) {
    setModoSelecionado(modo);
  }

  function capturarModoAtual() {
    if (modoSelecionado === "Áudio") {
      iniciarGravacaoAudio();
    }
  }

  function sairDoModoAula() {
    if (gravandoAudio) {
      pararGravacaoAudio();
    }

    onSair();
  }

  return (
    <section className="modo-aula-ativo">
      <header className="camera_topo modo-aula-topo">
        <div className="modo-aula-materia">
          <BookOpen size={19} />

          <span className="modo-aula-materia_textos">
            <strong>{materiaAtual}</strong>
            <small>{sessaoAtual}</small>
          </span>
        </div>

        <div className="modo-aula-acoes-topo">
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
            onClick={onAbrirConfiguracoes}
            aria-label="Editar curso e matérias"
          >
            <Settings size={19} />
          </button>

          <button
            className="botao-sair-modo-aula"
            type="button"
            onClick={sairDoModoAula}
            aria-label="Sair do Modo Aula"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {modoSelecionado === "Documento" && (
        <div className="scanner-documento">
          <div className="scanner-documento__linha" />
        </div>
      )}

      <section className="camera_controles modo-aula-controles">
        <nav
          className="camera_modos"
          aria-label="Modos da câmera"
        >
          {modosAula.map((modo) => (
            <button
              key={modo}
              className={
                modo === modoSelecionado
                  ? "modo modo--ativo"
                  : "modo"
              }
              type="button"
              onClick={() => selecionarModo(modo)}
            >
              {modo === "Documento" && (
                <FileText size={14} />
              )}

              {modo === "Áudio" && (
                <Mic size={14} />
              )}

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
            onClick={capturarModoAtual}
            aria-label={
              modoSelecionado === "Áudio"
                ? "Iniciar gravação de áudio"
                : "Capturar"
            }
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

        {gravandoAudio ? (
          <button
            className="botao-gravacao-audio"
            type="button"
            onClick={pararGravacaoAudio}
            aria-label="Parar gravação de áudio"
          >
            <span className="indicador-gravacao" />

            <span>Gravando áudio</span>

            <strong>
              {formatarTempo(segundosGravacao)}
            </strong>

            <Square size={13} fill="currentColor" />
          </button>
        ) : (
          <button
            className="botao-expandir"
            type="button"
            aria-label="Expandir controles"
          >
            <ChevronUp size={25} />
          </button>
        )}

        <footer className="navegacao-celular">
          <Menu size={18} />

          <span className="botao-home" />

          <ChevronUp
            className="botao-voltar"
            size={20}
          />
        </footer>
      </section>
    </section>
  );
}

export default ModoAulaAtivo;
