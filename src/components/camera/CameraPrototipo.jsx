import {
  ChevronUp,
  EyeOff,
  Focus,
  Images,
  Menu,
  MicOff,
  RefreshCw,
  Settings,
  ZapOff,
} from "lucide-react";

import "./cameraPrototipo.css";

const modosCamera = ["Noite", "Retrato", "Foto", "Vídeo", "Microfilme"];

function CameraPrototipo({
  children,
  videoRef,
  modoAulaAtivo = false,
  onAbrirModoAula,
  onVoltar,
}) {
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
          <button className="botao-icone" type="button" aria-label="Foco">
            <Focus size={19} />
          </button>

          <button className="botao-icone" type="button" aria-label="Flash desligado">
            <ZapOff size={19} />
          </button>

          <button className="botao-icone" type="button" aria-label="Efeitos desligados">
            <EyeOff size={19} />
          </button>

          <strong className="logo-camera">ZEISS</strong>

          <button className="botao-icone" type="button" aria-label="Microfone desligado">
            <MicOff size={19} />
          </button>

          <button
            className="botao-icone"
            type="button"
            onClick={onVoltar}
            aria-label="Trocar protótipo"
          >
            <Settings size={19} />
          </button>
        </header>

        <div className="camera_visualizacao">
          <video ref={videoRef} className="camera_video" autoPlay playsInline muted />

          {!modoAulaAtivo && (
            <>
              <button
                className="botao-modo-aula"
                type="button"
                onClick={onAbrirModoAula}
              >
                Modo Aula
              </button>

              <div className="camera_informacoes">
                <span>0,5x</span>
                <span className="zoom-ativo">1x</span>
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
          <nav className="camera_modos" aria-label="Modos da câmera">
            {modosCamera.map((modo) => (
              <button
                key={modo}
                className={modo === "Foto" ? "modo modo--ativo" : "modo"}
                type="button"
              >
                {modo}
              </button>
            ))}
          </nav>

          <div className="camera_acoes">
            <button className="botao-galeria" type="button" aria-label="Abrir galeria">
              <Images size={23} />
            </button>

            <button className="botao-capturar" type="button" aria-label="Tirar foto">
              <span />
            </button>

            <button className="botao-inverter" type="button" aria-label="Inverter câmera">
              <RefreshCw size={24} />
            </button>
          </div>

          <button className="botao-expandir" type="button" aria-label="Expandir controles">
            <ChevronUp size={25} />
          </button>

          <footer className="navegacao-celular">
            <Menu size={18} />
            <span className="botao-home" />
            <ChevronUp className="botao-voltar" size={20} />
          </footer>
        </section>

        {children}
      </section>
    </main>
  );
}

export default CameraPrototipo;