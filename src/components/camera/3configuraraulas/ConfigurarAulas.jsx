import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock,
  Plus,
  Trash2,
} from "lucide-react";

import "./configuraraulas.css";

function ConfigurarAulas({
  aberto,
  aulas,
  onAlterarAulas,
  onVoltar,
  onContinuar,
}) {
  if (!aberto) {
    return null;
  }

  function adicionarAula() {
    const novaAula = {
      id: Date.now(),
      materia: "",
      dia: "",
      horarioInicio: "",
      horarioFim: "",
    };

    onAlterarAulas([...aulas, novaAula]);
  }

  function alterarAula(id, campo, valor) {
    const aulasAtualizadas = aulas.map((aula) => {
      if (aula.id === id) {
        return {
          ...aula,
          [campo]: valor,
        };
      }

      return aula;
    });

    onAlterarAulas(aulasAtualizadas);
  }

  function removerAula(id) {
    const aulasAtualizadas = aulas.filter(
      (aula) => aula.id !== id
    );

    onAlterarAulas(aulasAtualizadas);
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    const existeCampoVazio = aulas.some((aula) => {
      return (
        !aula.materia.trim() ||
        !aula.dia ||
        !aula.horarioInicio ||
        !aula.horarioFim
      );
    });

    if (existeCampoVazio) {
      alert(
        "Preencha a matéria, o dia e os horários de todas as aulas."
      );

      return;
    }

    onContinuar();
  }

  return (
    <section className="configurar_aulas">
      <header className="configurar_aulas_topo">
        <button
          className="configurar_aulas_voltar"
          type="button"
          onClick={onVoltar}
          aria-label="Voltar"
        >
          <ChevronLeft size={23} />
        </button>

        <div>
          <span>Configuração</span>
          <strong>Modo Aula</strong>
        </div>

        <span className="etapa">
          2 de 4
        </span>
      </header>

      <div className="progresso">
        <span />
      </div>

      <main className="configurar_aulas_conteudo">
        <span className="configurar_aulas_icone">
          <BookOpen size={30} />
        </span>

        <p className="configurar_aulas_categoria">
          Suas aulas
        </p>

        <h1>Quais aulas fazem parte da sua rotina?</h1>

        <p className="configurar_aulas_descricao">
          Informe as matérias e os horários para que o Modo Aula
          identifique automaticamente cada aula.
        </p>

        <form
          className="configurar_aulas_formulario"
          onSubmit={enviarFormulario}
        >
          <div className="configurar_aulas_lista">
            {aulas.map((aula, indice) => (
              <article
                className="cartao_aula"
                key={aula.id}
              >
                <header className="cartao_aula_topo">
                  <div>
                    <Clock size={16} />
                    <strong>Aula {indice + 1}</strong>
                  </div>

                  {aulas.length > 1 && (
                    <button
                      className="cartao_aula_remover"
                      type="button"
                      onClick={() => removerAula(aula.id)}
                      aria-label={`Remover aula ${indice + 1}`}
                    >
                      <Trash2 size={17} />
                    </button>
                  )}
                </header>

                <div className="cartao_aula_campo">
                  <label htmlFor={`materia_${aula.id}`}>
                    Matéria
                  </label>

                  <input
                    id={`materia_${aula.id}`}
                    type="text"
                    value={aula.materia}
                    placeholder="Ex: Web Development"
                    onChange={(evento) =>
                      alterarAula(
                        aula.id,
                        "materia",
                        evento.target.value
                      )
                    }
                  />
                </div>

                <div className="cartao_aula_campo">
                  <label htmlFor={`dia_${aula.id}`}>
                    Dia da semana
                  </label>

                  <select
                    id={`dia_${aula.id}`}
                    value={aula.dia}
                    onChange={(evento) =>
                      alterarAula(
                        aula.id,
                        "dia",
                        evento.target.value
                      )
                    }
                  >
                    <option value="">Selecione um dia</option>
                    <option value="Segunda-feira">
                      Segunda-feira
                    </option>
                    <option value="Terça-feira">
                      Terça-feira
                    </option>
                    <option value="Quarta-feira">
                      Quarta-feira
                    </option>
                    <option value="Quinta-feira">
                      Quinta-feira
                    </option>
                    <option value="Sexta-feira">
                      Sexta-feira
                    </option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                  </select>
                </div>

                <div className="cartao_aula_horarios">
                  <div className="cartao_aula_campo">
                    <label htmlFor={`inicio_${aula.id}`}>
                      Início
                    </label>

                    <input
                      id={`inicio_${aula.id}`}
                      type="time"
                      value={aula.horarioInicio}
                      onChange={(evento) =>
                        alterarAula(
                          aula.id,
                          "horarioInicio",
                          evento.target.value
                        )
                      }
                    />
                  </div>

                  <div className="cartao_aula_campo">
                    <label htmlFor={`fim_${aula.id}`}>
                      Término
                    </label>

                    <input
                      id={`fim_${aula.id}`}
                      type="time"
                      value={aula.horarioFim}
                      onChange={(evento) =>
                        alterarAula(
                          aula.id,
                          "horarioFim",
                          evento.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="configurar_aulas_adicionar"
            type="button"
            onClick={adicionarAula}
          >
            <Plus size={20} />
            Adicionar aula
          </button>

          <button
            className="configurar_aulas_continuar"
            type="submit"
          >
            Continuar
            <ChevronRight size={20} />
          </button>
        </form>
      </main>
    </section>
  );
}

export default ConfigurarAulas;