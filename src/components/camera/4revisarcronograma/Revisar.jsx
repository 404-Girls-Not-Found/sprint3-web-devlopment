import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Pencil,
} from "lucide-react";

import "./revisar.css";

function Revisar({
  aberto,
  curso,
  aulas,
  onVoltar,
  onEditarCurso,
  onEditarAulas,
  onFinalizar,
}) {
  if (!aberto) {
    return null;
  }

  return (
    <section className="revisar_configuracao">
      <header className="revisar_configuracao_topo">
        <button
          className="revisar_configuracao_voltar"
          type="button"
          onClick={onVoltar}
        >
          <ChevronLeft size={23} />
        </button>

        <div>
          <span>Configuração</span>
          <strong>Modo Aula</strong>
        </div>

        <span className="etapa">3 de 4</span>
      </header>

      <div className="progresso">
        <span />
      </div>

      <main className="revisar_configuracao_conteudo">
        <span className="revisar_configuracao_icone">
          <Check size={30} />
        </span>

        <p className="revisar_configuracao_categoria">
          Revisão
        </p>

        <h1>Confira suas informações</h1>

        <p className="revisar_configuracao_descricao">
          Verifique se o seu curso, as matérias e os horários
          estão certos antes de ativar o Modo Aula.
        </p>

        <section className="revisar_configuracao_secao">
          <header className="revisar_configuracao_secao_topo">
            <div>
              <BookOpen size={18} />
              <span>Seu curso</span>
            </div>

            <button
              className="revisar_configuracao_editar"
              type="button"
              onClick={onEditarCurso}
            >
              <Pencil size={15} />
              Editar
            </button>
          </header>

          <article className="revisar_configuracao_curso">
            <small>Curso informado</small>
            <strong>{curso}</strong>
          </article>
        </section>

        <section className="revisar_configuracao_secao">
          <header className="revisar_configuracao_secao_topo">
            <div>
              <CalendarDays size={18} />
              <span>Suas aulas</span>
            </div>

            <button
              className="revisar_configuracao_editar"
              type="button"
              onClick={onEditarAulas}
            >
              <Pencil size={15} />
              Editar
            </button>
          </header>

          <div className="revisar_configuracao_aulas">
            {aulas.map((aula, indice) => (
              <article
                className="revisar_configuracao_aula"
                key={aula.id}
              >
                <div className="revisar_configuracao_numero">
                  {indice + 1}
                </div>

                <div className="revisar_configuracao_dados">
                  <strong>{aula.materia}</strong>

                  <div>
                    <CalendarDays size={14} />
                    <span>{aula.dia}</span>
                  </div>

                  <div>
                    <Clock size={14} />

                    <span>
                      {aula.horarioInicio} até{" "}
                      {aula.horarioFim}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="revisar_configuracao_aviso">
          <Check size={18} />

          <p>
            Depois de ativado, o Modo Aula identificará
            automaticamente a matéria atual usando o dia e o
            horário.
          </p>
        </div>

        <button
          className="revisar_configuracao_finalizar"
          type="button"
          onClick={onFinalizar}
        >
          Continuar
          <ChevronRight size={20} />
        </button>
      </main>
    </section>
  );
}

export default Revisar;