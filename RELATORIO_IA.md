# Relatório de Uso de Inteligência Artificial

## 1. Identificação do projeto
**Projeto:** JOVI — Modo Aula  
**Equipe:** 404 Girls Not Found   
**Finalidade deste documento:** Registrar de forma transparente como ferramentas de Inteligência Artificial foram utilizadas durante o desenvolvimento do projeto.

---

## 2. Introdução

Durante o desenvolvimento do projeto JOVI, a Inteligência Artificial foi utilizada como uma ferramenta de apoio técnico e educacional.
O principal uso da IA ocorreu durante a implementação do acesso à câmera do dispositivo. Essa funcionalidade permite que o protótipo solicite autorização ao usuário e exiba, dentro da aplicação, a imagem capturada pela câmera do celular ou do computador.
A implementação tornou o projeto mais realista e permitiu que a tela do Modo Aula deixasse de ser apenas uma representação visual estática, aproximando o protótipo da experiência esperada em uma aplicação funcional.

---

## 3. Objetivo do uso da IA

A Inteligência Artificial foi utilizada com o objetivo de auxiliar a equipe a compreender e implementar recursos que ainda não haviam sido trabalhados em profundidade durante as aulas.
O principal objetivo foi descobrir como uma aplicação web desenvolvida com React poderia:
- Solicitar permissão para utilizar a câmera do dispositivo;
- Acessar a câmera do celular ou do computador;
- Exibir a imagem da câmera em tempo real;
- Integrar a imagem capturada ao layout do protótipo;
- Encerrar corretamente o acesso à câmera quando necessário;
- Tratar situações em que o usuário não concede a permissão;
- Adaptar a funcionalidade para diferentes dispositivos e tamanhos de tela.

---

## 4. Funcionalidade desenvolvida com apoio da IA

### 4.1 Acesso à câmera do dispositivo

O principal recurso implementado com apoio da IA foi o acesso real à câmera do dispositivo.
Para isso, foi utilizada a API de mídia disponibilizada pelos navegadores, por meio de recursos como:
```javascript
navigator.mediaDevices.getUserMedia()
```
Esse recurso permite solicitar acesso à câmera e receber o fluxo de vídeo produzido pelo dispositivo.
A IA auxiliou na compreensão de como esse fluxo poderia ser associado a um elemento de vídeo dentro da aplicação, permitindo que o usuário visualizasse a imagem da câmera em tempo real.
---

### 4.2 Permissão do usuário

O acesso à câmera depende da autorização do usuário. Por isso, ao entrar na área correspondente, o navegador solicita permissão para utilizar a câmera do celular ou do computador.
A IA ajudou a compreender esse processo e a considerar possíveis situações, como:
- Permissão concedida;
- Permissão recusada;
- Dispositivo sem câmera disponível;
- Navegador sem suporte ao recurso;
- Câmera já sendo utilizada por outro programa;
- Falha ao iniciar o fluxo de vídeo.

---

### 4.4 Exibição da câmera no layout

Além de acessar a câmera, foi necessário ajustar a imagem para que ela aparecesse corretamente dentro da interface criada para o projeto.
A IA foi utilizada como apoio para realizar ajustes relacionados a:
- Dimensões do vídeo;
- Posicionamento da imagem;
- Preenchimento da área disponível;
- Proporção da câmera;
- Comportamento em telas de celular e computador;
- Integração entre a imagem e os controles do Modo Aula.
Esses ajustes contribuíram para manter a identidade visual do projeto e tornar a experiência mais próxima da câmera de um aplicativo mobile.

---

## 5. Como a IA foi utilizada

A IA foi utilizada por meio de perguntas e solicitações relacionadas às necessidades encontradas durante o desenvolvimento.

Entre os tipos de solicitações realizadas, destacam-se:

- Explicação sobre como acessar a câmera utilizando JavaScript;
- Adaptação do acesso à câmera para componentes React;
- Explicação sobre o funcionamento de `useRef`;
- Sugestões para solicitar e tratar permissões do navegador;
- Identificação e correção de erros no código;
- Organização do código para evitar que a câmera permanecesse ativa desnecessariamente;
- Integração da câmera com as telas e funcionalidades já criadas pela equipe.
As respostas geradas pela IA foram utilizadas como referência e ponto de partida. O conteúdo não foi aplicado de maneira automática ou sem análise.

---

## 6. Processo de análise e validação

Após receber as sugestões da Inteligência Artificial, a equipe realizou as seguintes etapas:
1. Leitura e análise do código sugerido;
2. Adaptação dos nomes de funções, componentes e classes para a estrutura do projeto;
3. Integração com os componentes desenvolvidos pela equipe;
4. Execução do projeto no ambiente de desenvolvimento;
5. Testes de solicitação de permissão;
6. Testes de funcionamento da câmera;
7. Verificação da exibição em diferentes tamanhos de tela;
8. Correção de problemas visuais e funcionais;
9. Validação da navegação entre as telas;
10. Revisão do código final.
Portanto, a IA foi utilizada como ferramenta de assistência, mas as decisões sobre a implementação, a organização do projeto e a versão final do código foram tomadas pela equipe.

---

## 7. Conclusão

A Inteligência Artificial foi utilizada como ferramenta de apoio durante a implementação do acesso real à câmera do celular ou do computador.
Esse recurso foi importante para tornar o protótipo do JOVI mais interativo, funcional e próximo da experiência planejada para o produto. Em vez de apresentar somente uma simulação visual, o projeto passou a utilizar a câmera disponível no dispositivo, mediante autorização do usuário.
A IA contribuiu com explicações, exemplos e sugestões de código, enquanto a equipe ficou responsável por compreender, adaptar, integrar e testar a solução.
Dessa forma, o uso da Inteligência Artificial complementou o processo de aprendizagem e desenvolvimento, sem substituir a participação, a criatividade, as decisões e a responsabilidade técnica dos integrantes do projeto.