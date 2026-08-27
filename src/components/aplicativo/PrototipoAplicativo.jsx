import { useMemo, useState } from "react";
import { ArrowLeft, BookOpen, CalendarDays, Camera, ChevronRight, Clock3, FileImage, FolderOpen, GraduationCap, Headphones, Home, Search, Sparkles } from "lucide-react";
import "./aplicativo.css";

const CORES = ["azul", "roxo", "laranja", "verde", "rosa"];
const sigla = (nome) => nome.trim().split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();

function PrototipoAplicativo ({ curso, aulas, onVoltar, onAbrirCamera }) {
  const [materiaAberta, setMateriaAberta] = useState(null);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [busca, setBusca] = useState("");

  const materias = useMemo(() => {
    const nomes = [];
    aulas.forEach(({ materia }) => {
      const nome = materia.trim();
      if (nome && !nomes.includes(nome)) nomes.push(nome);
    });
    return nomes.map((nome, indice) => ({
      nome,
      sigla: sigla(nome),
      cor: CORES[indice % CORES.length],
      horarios: aulas.filter((aula) => aula.materia.trim() === nome),
    }));
  }, [aulas]);

  const materiasFiltradas = materias.filter(({ nome }) => nome.toLowerCase().includes(busca.toLowerCase()));
  const proximaAula = aulas.find((aula) => aula.materia.trim() && aula.dia && aula.horarioInicio && aula.horarioFim);

  if (materiaAberta) {
    return (
      <main className="aplicativo">
        <section className="aplicativo_tela">
          <header className="aplicativo_topo aplicativo_topo--pasta">
            <button className="aplicativo_botao_icone" type="button" onClick={() => setMateriaAberta(null)} aria-label="Voltar para matérias"><ArrowLeft size={23} /></button>
            <div className="aplicativo_marca">
              <span className={`materia_sigla materia_sigla--${materiaAberta.cor}`}>{materiaAberta.sigla}</span>
              <div><strong>{materiaAberta.nome}</strong><small>{curso || "Modo Aula"}</small></div>
            </div>
          </header>

          <div className="pasta_conteudo">
            <p className="aplicativo_saudacao">CONTEÚDOS DA MATÉRIA</p>
            <h1>{materiaAberta.nome}</h1>
            <section className="pasta_horarios">
              <div className="titulo_secao"><CalendarDays size={20} /><h2>Horários configurados</h2></div>
              {materiaAberta.horarios.map((aula) => (
                <article className="pasta_horario" key={aula.id}>
                  <Clock3 size={18} /><div><strong>{aula.dia}</strong><span>{aula.horarioInicio} — {aula.horarioFim}</span></div>
                </article>
              ))}
            </section>
            <Totais />
            <section className="pasta_vazia">
              <FolderOpen size={38} /><h2>Esta pasta ainda está vazia</h2>
              <p>As fotos, os documentos e os áudios capturados no Modo Aula aparecerão aqui.</p>
              <button type="button" onClick={onAbrirCamera}><Camera size={18} /> Abrir câmera</button>
            </section>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="aplicativo">
      <section className="aplicativo_tela">
        <header className="aplicativo_topo">
          <button className="aplicativo_botao_icone" type="button" onClick={onVoltar} aria-label="Voltar"><ArrowLeft size={23} /></button>
          <div className="aplicativo_marca">
            <span className="aplicativo_logo"><GraduationCap size={22} /></span>
            <div><strong>Modo Aula</strong><small>{curso || "APLICATIVO DE ESTUDOS"}</small></div>
          </div>
          <button className="aplicativo_botao_icone" type="button" onClick={() => setBuscaAberta(!buscaAberta)} aria-label="Pesquisar matéria"><Search size={23} /></button>
        </header>

        <div className="aplicativo_conteudo">
          {buscaAberta && <label className="aplicativo_busca"><Search size={18} /><input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar matéria" autoFocus /></label>}
          <p className="aplicativo_saudacao">Olá! Seus estudos estão em dia.</p>
          <h1>Materiais organizados para você</h1>
          <aside className="aplicativo_aviso"><Sparkles size={24} /><div><strong>Protótipo complementar</strong><p>Os conteúdos capturados no Modo Aula serão organizados automaticamente por matéria.</p></div></aside>

          {proximaAula && (
            <article className="proxima_aula">
              <header><span>PRÓXIMA AULA</span><small>conforme sua agenda</small></header>
              <div className="proxima_aula_corpo">
                <span className="proxima_aula_sigla">{sigla(proximaAula.materia)}</span>
                <div className="proxima_aula_dados"><strong>{proximaAula.materia}</strong><span><CalendarDays size={14} />{proximaAula.dia}</span><span><Clock3 size={14} />{proximaAula.horarioInicio} — {proximaAula.horarioFim}</span></div>
                <button type="button" onClick={onAbrirCamera}><Camera size={17} /> Abrir câmera</button>
              </div>
            </article>
          )}

          <Totais />
          <section className="materias_secao">
            <header className="titulo_secao"><BookOpen size={22} /><h2>Suas matérias</h2><small>Organizadas pela agenda</small></header>
            <div className="materias_lista">
              {materiasFiltradas.map((materia) => (
                <button className="materia_cartao" type="button" key={materia.nome} onClick={() => setMateriaAberta(materia)}>
                  <span className={`materia_sigla materia_sigla--${materia.cor}`}>{materia.sigla}</span>
                  <span className="materia_dados"><strong>{materia.nome}</strong>{materia.horarios.map((aula) => <small key={aula.id}>{aula.dia} · {aula.horarioInicio} — {aula.horarioFim}</small>)}<span><FileImage size={14} /> 0 fotos <Headphones size={14} /> 0 áudios</span></span>
                  <ChevronRight size={21} />
                </button>
              ))}
              {materias.length === 0 && <div className="materias_vazias"><BookOpen size={32} /><strong>Nenhuma matéria configurada</strong><p>Configure o Modo Aula na câmera para suas matérias aparecerem aqui.</p><button type="button" onClick={onAbrirCamera}>Configurar agora</button></div>}
              {materias.length > 0 && materiasFiltradas.length === 0 && <p className="busca_sem_resultado">Nenhuma matéria encontrada.</p>}
            </div>
          </section>
        </div>

        <nav className="aplicativo_navegacao" aria-label="Navegação do aplicativo">
          <button className="ativo" type="button"><Home size={21} /><span>Início</span></button>
          <button type="button"><BookOpen size={21} /><span>Materiais</span></button>
          <button type="button"><Sparkles size={21} /><span>Resumos</span></button>
        </nav>
      </section>
    </main>
  );
}

function Totais() {
  return <div className="aplicativo_totais"><article><FileImage size={22} /><strong>0</strong><span>Fotos</span></article><article><Headphones size={22} /><strong>0</strong><span>Áudios</span></article><article><Sparkles size={22} /><strong>0</strong><span>Resumos</span></article></div>;
}

export default PrototipoAplicativo;
