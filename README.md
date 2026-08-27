# JOVI - Modo Aula

Protótipo funcional em React JOVI, desenvolvido pela equipe **404 Girls Not Found** para o Challenge JOVI 2026.

O projeto simula duas telas de um app mobile:
- Um **protótipo de câmera**, com acesso real à câmera e ao microfone do dispositivo, onde o usuário pode configurar um "Modo Aula" informando o nome do curso, as matérias, os dias da semana e os horários.
- Um **protótipo de aplicativo de estudos**, que reaproveita automaticamente essas informações para organizar o conteúdo em pastas por matéria.

## Como o projeto funciona

O fluxo da aplicação é controlado inteiramente pelo componente `App.jsx`, que guarda o estado principal (tela atual, curso, aulas, etc.) e o repassa via props para os componentes filhos, seguindo a estrutura pai → filho com componentes funcionais.

1. **Tela inicial (`EscolherPrototipo`)** - o usuário escolhe qual protótipo quer visualizar: o da câmera ou o do aplicativo.
2. **Protótipo da câmera (`CameraPrototipo`, dentro de `App.jsx`)** - exibe a imagem da câmera do dispositivo em tempo real (`navigator.mediaDevices.getUserMedia`) e simula a interface de uma câmera de celular, com botão para entrar no "Modo Aula".
3. **Configuração do Modo Aula** - uma sequência de telas guia o usuário:
   - `EntradaModoAula` - tela de boas-vindas ao Modo Aula;
   - `ConfigurarCurso` - cadastro do nome do curso;
   - `ConfigurarAulas` - cadastro das matérias, dias e horários (pode adicionar mais de uma aula);
   - `Revisar` - revisão de tudo o que foi configurado, com opção de editar curso ou aulas;
   - `Organizar` - escolha da forma de organização dos conteúdos.
4. **Modo Aula ativo (`ModoAulaAtivo`)** - depois de finalizada a configuração, a interface da câmera some e o app mostra a tela do Modo Aula em funcionamento (com cronômetro/tempo decorrido calculado com `Math.floor`).
5. **Protótipo do aplicativo (`PrototipoAplicativo`)** - mostra o curso e as matérias cadastradas anteriormente, organizadas em "pastas" (uma por matéria), reaproveitando os dados informados na configuração do Modo Aula.

### Persistência de dados (localStorage)

O curso e as aulas cadastrados pelo usuário são salvos automaticamente no `localStorage` do navegador sempre que são alterados (via `useEffect`), nas chaves `jovi_modoaula_curso` e `jovi_modoaula_aulas`. Ao carregar a aplicação, o `App.jsx` lê esses valores salvos (com tratamento de erro caso o dado esteja ausente ou corrompido) e já inicia o app com as informações da última configuração feita,  ou seja, se o usuário atualizar a página ou fechar e abrir o navegador novamente, o curso e as matérias cadastradas continuam disponíveis, tanto no protótipo da câmera quanto no protótipo do aplicativo, sem precisar reconfigurar tudo do zero.

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) - build tool e servidor de desenvolvimento
- [lucide-react](https://lucide.dev/) - ícones
- CSS puro (um arquivo de estilos por componente)
- JavaScript (ES6+)
- Web API `navigator.mediaDevices.getUserMedia` - acesso à câmera e ao microfone
- Web API `localStorage` - persistência dos dados de curso e aulas no navegador
- ESLint - padronização de código

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (instalado junto com o Node.js)

## Como instalar as dependências

```bash
# Clone o repositório
git clone https://github.com/404-Girls-Not-Found/sprint3-web-devlopment.git

# Acesse a pasta do projeto
cd sprint3-web-devlopment

# Instale as dependências
npm install
```

## Como executar o projeto

```bash
# Ambiente de desenvolvimento
npm run dev
```

Depois, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

> **Importante:** a funcionalidade de câmera/microfone depende da API `getUserMedia`, que só funciona em conexões seguras (`https://`) ou em `localhost`. Ao rodar localmente com `npm run dev`, o navegador vai solicitar permissão de câmera e microfone é necessário permitir o acesso para visualizar o protótipo da câmera.

Outros scripts disponíveis:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # pré-visualiza a build de produção localmente
npm run lint      # verifica o código com ESLint
```

## Usuários e senhas para teste

Não há autenticação no projeto, todas as telas são de acesso livre.

## Uso de Inteligência Artificial no projeto

A Inteligência Artificial foi utilizada como apoio técnico e educacional em dois pontos principais do desenvolvimento: (1) na implementação do acesso real à câmera e ao microfone do dispositivo via `navigator.mediaDevices.getUserMedia`, incluindo o tratamento de permissões do usuário, o uso de `useRef` para controlar o vídeo e o encerramento correto do stream ao trocar de tela; e (2) na integração entre a configuração do "Modo Aula" (curso, matérias, dias e horários) e o protótipo do aplicativo de estudos, permitindo que os dados cadastrados sejam reutilizados automaticamente para montar as pastas de cada matéria. As sugestões geradas pela IA foram usadas como ponto de partida e referência técnica, sendo revisadas, adaptadas e testadas pela equipe antes de integradas ao projeto final. O relatório completo, com todos os detalhes do processo, está disponível no arquivo [`RELATORIO_IA.md`](./RELATORIO_IA.md).

## Deploy

Link do deploy na Vercel: **[bia - ADICIONAR O LINK AQUI]**

## Repositório

https://github.com/404-Girls-Not-Found/sprint3-web-devlopment

## Equipe
404 Girls not found

NOME                          | RM       | TURMA
Beatriz de Araujo Périgo      | RM569654 | 1ESPV
Beatriz Soares Salve          | RM568791 | 1ESPH
Estela Mariano da Silva       | RM569513 | 1ESPH
Gabriela Correa Pinon Labrada | RM569849 | 1ESPH