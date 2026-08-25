import {
    ArrowRight,
    Camera,
    CheckCircle2,
    GraduationCap,
    LayoutGrid,
    Sparkles,
} from "lucide-react";

import"./escolherPrototipo.css";

function EscolherPrototipo({
    onAbrirCamera,
    onAbrirAplicativo,
}) {
    return (
        <main className="seletor">
            <section className="seletor_painel">
                <header className="seletor_topo">
                    <span className="seletor_logo"><GraduationCap size={22} /></span>

                    <div>
                        <strong>Modo Aula</strong>
                        <small>Experiência Interativa</small>
                    </div>
                </header>

                <div className="seletor_intro">
                    <p>Escolha uma experiência</p>
                    <h1>Qual deseja abrir?</h1>
                    <span>Os dois protótipos de completam. Você pode conhecê-los na ordem que preferir.</span>
                </div>

                <aside className="seletor_ordem"><CheckCircle2 size={19}/>
                <p>
                    <strong>Ordem recomendada:</strong> comece pelo Modo Aula na câmera e depois veja como o aplicativo organiza o conteúdo capturado
                </p>
                </aside>

                <div className="seletor_opcoes">
                    <article className="seletor_cartao seletor_cartao--principal">
                        <div className="seletor_cartao_topo">
                            <span className="seletor_numero">1</span>
                            <span className="seletor_selo">Principal</span>
                        </div>

                        <span className="seletor_cartao_icone"><Camera size={28} /></span>

                        <p>Comece por aqui</p>
                        <h2> Modo Aula na câmera</h2>
                        <span className="seletor_cartao_descricao">Configure o cronograma e experimente a câmera que identifica a matéria para capturar fotos, documentos e áudios de forma rápida durante a aula</span>   

                        <ul>
                            <li>ExperiÇencia principal do projeto</li>
                            <li>Configuração por dia e horário</li>
                            <li>Captura no contexto da aula</li>
                        </ul>

                        <button type="button" onClick={onAbrirCamera}> Abrir modo câmera <ArrowRight size={18} /></button>
                    </article>

                    <article className="seletor_cartao">
                        <div className="seletor_cartao_topo">
                            <span className="seletor_numero">2</span>
                            <span className="seletor_selo seletor_selo--extra">Extra</span>
                        </div>

                        <span className="seletor_selo seletor_cartao_icone--extra"><LayoutGrid size={28}/></span>

                        <p>Experiência complementar</p>
                        <h2>Aplicativo de estudos</h2>
                        <span className="seletor_cartao_descricao">Veja fotos, audio e documentos organizados automaticamente por matéria, com transcrição e resumos inteligentes.</span>

                        <div className="seletor_recursos">
                            <span><Sparkles size={14}/>Organização</span>
                            <span><Sparkles size={14}/>Trascrição</span>
                            <span><Sparkles size={14}/>Resumos</span>
                        </div>

                        <button className="seletor_botao_secundario" type="button" onClick={onAbrirAplicativo}>
                            Abrir aplicativo <ArrowRight size={18}/>
                        </button>
                    </article>
                </div>

                <footer className="seletor_rodape">Protótipos demonstrativos desenvolvidos em React</footer>
            </section>
        </main>
    )
}

export default EscolherPrototipo;