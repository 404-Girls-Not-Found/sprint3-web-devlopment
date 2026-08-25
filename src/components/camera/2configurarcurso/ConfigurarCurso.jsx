import {
    Book,
    BookOpen,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import "./configurarCurso.css";

function ConfigurarCurso ({
    aberto,
    curso,
    onAlterarCurso,
    onVoltar,
    onContinuar,
}) {
    if (!aberto) {
        return null;
    }

    function enviarFormulario (evento) {
        evento.preventDefault();

        if (!curso.trim()) {
            alert("Digite o nome do seu curso.");

            return;
        }

        onContinuar();
    }

    return (
        <section className="configurar_curso">
            <header className="configurar_curso_topo">

                <button className="configurar_curso_voltar" type="button" onClick={onVoltar} aria-label="Voltar"><ChevronLeft size={23}/></button>

                <div>
                    <span>Configuração</span>
                    <strong>Modo Aula</strong>
                </div>

                <span className="configurar_curso_etapa">1 de 4</span>
            </header>

            <div className="configurar_curso_progresso">    <span/>
            </div>

            <main className="configurar_curso_conteudo">
                <span className="configurar_curso_icone"><BookOpen size={30}/></span>

                <p className="configurar_curso_categoria">Seu curso</p>

                <h1>Qual curso você está fazendo?</h1>

                <p className="configurar_curso_descricao">Essa informação será usada para organizar suas matérias, fotos, documentos e gravações.</p>

                <form className="configurar_curso_formulario" onSubmit={enviarFormulario}>

                    <label htmlFor="nome_curso">Nome do curso</label>

                    <input id="nome_curso" type="text" value={curso} onChange={(evento) => onAlterarCurso(evento.target.value)}placeholder="Ex: Engenharia de Software" autoComplete="Off" autoFocus/>

                    <small>Você poderá alterar essa infomração depois</small>

                    <button className="configurar_curso_continuar" type="submit">Continuar <ChevronRight size={20}/></button>
                </form>
            </main>
        </section>
    );
}

export default ConfigurarCurso;