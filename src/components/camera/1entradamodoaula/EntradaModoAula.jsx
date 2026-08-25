import {
    GraduationCap,
    Lock
} from "lucide-react";

import "./entradaModoAula.css";

function EntradaModoAula({
    aberto,
    onFechar,
    onConfigurar,
}) {
    if(!aberto) {
        return null;
    }

    return (
        <div className="entrada-modo-aula" role="dialog" aria-modal="true" aria-labelledby="titulo-modo-aula_fundo" >
            <div className="entrada-modo-aula_fundo" onClick={onFechar}></div>

            <section className="entrada-modo-aula_modal">
                <header className="entrada-modo-aula_cabecalho">
                    <span className="entrada-modo-aula_icone"><GraduationCap size={31}/></span>

                    <h2 id="titulo-modo-aula">Modo Aula</h2>

                    <p>Sua câmera pode mudar automaticamente para uma interface escolhar simplificada nos horários das aulas</p>
                </header>

                <div className="entrada-modo-aula_conteudo">
                    <div className="entrada-modo-aula_privacidade">
                        <Lock size={17}/>
                    
                        <p>O Modo Aula permite organização automática. Áudio e fotos só será gravados quando você autorizar.</p>
                    </div>

                    <h3>Você gostaria de configurar o Modo Aula?</h3>

                    <div className="entrada-modo-aula_acoes">
                        <button className="entrada-modo-aula_agora-nao" type="button" onClick={onFechar}>Agora não</button>

                        <button className="entrada-modo-aula_configurar" type="button" onClick={onConfigurar}>Configurar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EntradaModoAula;