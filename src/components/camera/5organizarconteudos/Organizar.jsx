import {
  ArrowRight,
  Check,
  ChevronLeft,
  Cloud,
  FolderOpen,
  Smartphone,
  Sparkles,
} from "lucide-react";

import "./organizar.css";

const opcoesOrganizacao = [
  {
    id: "aplicativos-nativos",
    titulo: "Aplicativos do celular",
    descricao:
      "Fotos, arquivos e áudios continuam salvos e organizados nos aplicativos nativos do seu aparelho.",
    icone: Smartphone,
  },
  {
    id: "google-drive",
    titulo: "Google Drive",
    descricao:
      "Conecte sua conta para guardar os conteúdos das aulas no Google Drive.",
    icone: FolderOpen,
  },
  {
    id: "one-drive",
    titulo: "OneDrive",
    descricao:
      "Conecte sua conta Microsoft para salvar os conteúdos das aulas no OneDrive.",
    icone: Cloud,
  },
  {
    id: "organizacao-inteligente",
    titulo: "Organização inteligente",
    descricao:
      "Use nosso aplicativo para organizar os materiais, transcrever áudios e criar resumos inteligentes.",
    icone: Sparkles,
    recomendado: true,
    beneficios: [
      "Organização automática por matéria",
      "Transcrição das gravações",
      "Resumos inteligentes",
    ],
  },
];

function Organizar({
  aberto,
  valor,
  onAlterar,
  onVoltar,
  onFinalizar,
}) {
  if (!aberto) {
    return null;
  }

  return (
    <section className="organizar_conteudos">
      <header className="organizar_conteudos_topo">
        <button
          className="organizar_conteudos_voltar"
          type="button"
          onClick={onVoltar}
          aria-label="Voltar para a revisão"
        >
          <ChevronLeft size={23} />
        </button>

        <div>
          <span>Configuração</span>
          <strong>Modo Aula</strong>
        </div>

        <span className="organizar_conteudos_etapa">
          4 de 4
        </span>
      </header>

      <div className="organizar_conteudos_progresso">
        <span />
      </div>

      <main className="organizar_conteudos_conteudo">
        <span className="organizar_conteudos_icone">
          <FolderOpen size={29} />
        </span>

        <p className="organizar_conteudos_categoria">
          Seus materiais
        </p>

        <h1>Onde você quer organizar suas aulas?</h1>

        <p className="organizar_conteudos_descricao">
          Escolha onde suas fotos, informações e gravações de áudio
          ficarão salvas. Você poderá mudar essa opção depois.
        </p>

        <div
          className="organizar_conteudos_opcoes"
          role="radiogroup"
          aria-label="Forma de organização dos materiais"
        >
          {opcoesOrganizacao.map((opcao) => {
            const Icone = opcao.icone;
            const selecionada = valor === opcao.id;

            return (
              <button
                key={opcao.id}
                className={ selecionada ? "organizar_conteudos_opcao organizar_conteudos_opcao--selecionada" : "organizar_conteudos_opcao"}
                type="button"
                role="radio"
                aria-checked={selecionada}
                onClick={() => onAlterar(opcao.id)}
              >
                {opcao.recomendado && (
                  <span className="organizar_conteudos_recomendado">
                    Recomendado
                  </span>
                )}

                <span className="organizar_conteudos_opcao_icone">
                  <Icone size={22} />
                </span>

                <span className="organizar_conteudos_opcao_texto">
                  <strong>{opcao.titulo}</strong>
                  <small>{opcao.descricao}</small>

                  {opcao.beneficios && (
                    <span className="organizar_conteudos_beneficios">
                      {opcao.beneficios.map((beneficio) => (
                        <span key={beneficio}>
                          <Check size={12} />
                          {beneficio}
                        </span>
                      ))}
                    </span>
                  )}
                </span>

                <span className="organizar_conteudos_radio">
                  {selecionada && <Check size={13} />}
                </span>
              </button>
            );
          })}
        </div>

        <button
          className="organizar_conteudos_finalizar"
          type="button"
          onClick={onFinalizar}
          disabled={!valor}
        >
          Ativar Modo Aula
          <ArrowRight size={19} />
        </button>

        <p className="organizar_conteudos_privacidade">
          Seus arquivos só serão acessados com a sua permissão.
        </p>
      </main>
    </section>
  );
}

export default Organizar;
