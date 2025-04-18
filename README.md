<h1 align="center" style="font-weight: bold;">Linx Impulse - Landing Page 💻</h1>

Landing page com produtos personalizados para cada usuário baseado na navegação de cada um.

<h2 id="intro">🔥 Introdução:</h2>

<h3>⚙️ Pré-requisitos:</h3>

Você precisa ter instalado na sua máquina as seguintes tecnologias:
- Node 20.x

<h3>🔨 Guia de instalação:</h1>

<h4>Passo 1: Clone esse repositório</h4>

```bash
git clone git@github.com:EmanuelLacerda/landing-page-linx-impulse.git
```

<h4>Passo 2: Instale as dependências</h4>

```bash
npm install
```

<h4>Passo 03: Execute o projeto</h4>

**1° Inicie o http-server:**
```bash
http-server
```

**2° Acesse no navegador a url indicada pelo http-server:**
Ex.: http://127.0.0.1:8082/

**3° Acesse o diretório 'src/' na janela do navegador que for aberta:**

<h2 id="running">📄 Andamento do projeto</h2>

<h3>O que já foi feito</h3>

- Layout da versão mobile(420 x 918 px).
- Ajuste de responsividade para a versão desktop.
- Carregamento e adição na DOM dos 8 primeiros produtos durante o carregamento da página.
- Adição na DOM de 8 novos produtos.
- Subir live preview.

<h3>O que falta ser feito</h3>

- Funcionamento do envio da newsletter.

<h3>Detalhamento sobre a priorização</h3>

Atualmente, o mais comum é os usuários acessarem a internet pelo celular do que por PC e notebook, o que torna mais comum a landing page ser acessada via mobile. Além disto, existe uma prática muito comum no frontend chamada mobile-first, que significa construir a estilização pensando no mobile. Por tudo isto, concluir ser melhor começar pela estilzação do mobile.

Quando a estilização mobile ficou pronta, o caminho mais assertivo me pareceu desenvolver uma das principais funcionalidades da landing page: carregamento dos produtos, pois não enxerguei benefício em trabalhar em qualquer outra coisa antes desta funcionalidade está pronta. Primeiro, desenvolvi o carregamento que ocorre no carregamento da página. Em seguida, desenvolvi a funcionalidade do botão "Ainda mais produtos aqui". Em ambos os casos, testei o carregamento normal e simulei situações de erro(falha na requisição para a API, todos os produtos já foram carregados, ...) de modo a saber se estava tudo funcionando adequadamente. Obviamente, resolvi os erros encontrados durante os testes. 

Em sequência a isto, optei por realizar o ajuste na estilização da versão desktop de modo a tornar o site responsivo e, depois, subir a landing page para o Netlify. Não tinha tempo para fazer estas duas alterações e o funcionamento da newsletter. Avaliando a melhor estratégia a ser feita, concluir que focar nas duas(responsividade e deploy) traria mais resultado em um caso real, pois a primeira permitiria uma boa experiência em diversos dispositivos e a segunda permitira a landing page ser acessada online.


<h2 id="projec-actors">👷 Autores</h2>

* Emanuel Lacerda - Desenvolvedor - [@EmanuelLacerda](https://github.com/EmanuelLacerda/)

<h2 id="licenca">📄 Licença</h2>
Esse projeto está sob a licença MIT - acesse os detalhes <a href="https://github.com/EmanuelLacerda/kairos-webapp/blob/main/LICENSE">LICENSE.md</a>.

<h2 id="contact">✉️ Contato</h2>
Se tiver alguma dúvida, quiser fazer sugestões, elogios, etc., se sinta livre para entrar em contato comigo por meio de um dos contatos abaixo:

- [in/emanuel-de-souza-lacerda](https://www.linkedin.com/in/emanuel-de-souza-lacerda/)
- emanuelsouzalacerda@gmail.com
