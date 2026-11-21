# Site do Casamento — Francisca & Rafael

Site estático (HTML, CSS e JavaScript simples), sem build tools, alojado no Netlify.
Para ver alterações em tempo real, abre `index.html` no browser ou usa a extensão "Live Server" no VS Code.

## Estrutura

```
├── index.html      → todo o conteúdo e secções
├── css/styles.css  → cores, tipografia e layout
├── js/script.js    → contador para o dia, menu mobile e efeito de aparecer ao fazer scroll
└── assets/         → logótipos (logo-completo.png e logo-medalhao.png) e fotografias
```

## Secções (por ordem)

1. **Topo** — medalhão, foto do casal em arco, nomes, data e contador, dentro de uma moldura de linha dupla, sobre manchas de aguarela como no convite
2. **Em Fotografias** — galeria
3. **O Grande Dia** — programa em linha do tempo, dentro de um cartão em arco sobre azul, como o cartão "O nosso dia"
4. **Informação Prática** — dress code, estacionamento e contactos lado a lado; transporte a toda a largura por baixo
5. **Como Chegar** — dois separadores, Basílica (cerimónia) e Quinta da Bichinha (copo de água, jantar e festa), cada um com o seu mapa, morada e ligações
6. **Confirmar Presença** — cartão "Contamos convosco", igual ao do convite: as confirmações são feitas por chamada para a Francisca ou para o Rafael, até 31 de julho de 2027
7. **Rodapé** — faixa verde-oliva com os nomes e o medalhão, como a do envelope

Não há formulário de RSVP nem ligação a Google Sheets: quem quiser confirmar liga a um dos noivos.

## Informação em falta

Neste momento não há nada por preencher. Se acrescentares algo provisório, marca-o com `<mark class="falta">…</mark>` no `index.html`
(aparece com um sublinhado tracejado e em itálico) e pesquisa depois por `class="falta"` para o encontrares. Quando estiver confirmado, apaga a etiqueta `<mark>` e deixa só o texto.

A cerimónia aparece às 11:30 (a missa é na verdade às 12h, mas é a hora que damos aos convidados). O copo de água é às 14:00. O jantar não tem hora indicada, e a festa vai das 14h às 4h da manhã.
Se a hora da cerimónia mudar, atualiza também `DATA_CASAMENTO` em `js/script.js`, que alimenta o contador.

### Números de telefone

Em "Confirmar Presença" os números da Francisca e do Rafael são ligações de chamada (`<a href="tel:+351…">`). Em telemóvel, tocar no número abre logo a chamada. Se mudarem, edita o `href` e o texto visível nos dois cartões.

### Logótipo

O logótipo vem de `novo_logo.jpeg` e foi convertido em duas imagens com fundo transparente, para assentar bem em qualquer cor:

- `assets/logo-medalhao.png` — só a moldura com o monograma; usado no menu, no topo, no programa, no cartão de confirmação e no rodapé.
- `assets/logo-completo.png` — moldura, monograma e nomes; neste momento não é usado (os nomes aparecem em letra caligráfica), mas fica guardado.

Para trocar o logótipo, substitui estes dois ficheiros mantendo os nomes (PNG com fundo transparente).

### Foto do casal

No topo, dentro do arco, está `assets/aroeira.jpeg`. Para trocar, muda o `src` da imagem no bloco `hero-photo` do `index.html`.

### Fundo do topo

O fundo do topo imita as manchas de aguarela do convite (azul acinzentado, sálvia e rosado sobre creme) e tem uma moldura de linha dupla em bordeaux. Está definido em `.hero` no `css/styles.css`.

### Flores

As flores foram recortadas da página 2 do PDF dos convites (que só tem as páginas como imagens achatadas, sem as flores em separado):

- `assets/flor-amor-perfeito.webp` — amor-perfeito com botão; no canto superior direito do topo.
- `assets/flor-ramo.webp` — ramo de folhas; no canto inferior esquerdo do topo e, espelhado, no canto de "Confirmar Presença".

São decorativas (`class="flor"` no `index.html`, posições em `.flor--…` no `css/styles.css`). Como o recorte foi feito sobre o papel creme, ficam bem em fundos claros; em fundos escuros notar-se-ia um contorno claro. Se um dia houver os PNG originais com fundo transparente, basta substituir estes ficheiros.

### Galeria

Cada foto é um bloco `.photo-placeholder` com uma `<img>` dentro. Para trocar ou juntar fotos, edita ou copia esses blocos em `index.html`.

### Como Chegar (mapas)

Os dois locais estão no bloco `LOCAIS` no início da secção final de `js/script.js`: morada, endereço do mapa incorporado, ligação "Abrir no Google Maps" e, na Quinta, a ligação para o site da Quinta.
Para acertar um ponto no mapa, abre o local no Google Maps, escolhe *Partilhar → Incorporar um mapa* e troca o endereço `mapa` desse local. O local que aparece à partida é o que tem `aria-selected="true"` no `index.html`, e a moldura do mapa também começa com esse `src`, por isso muda os dois em conjunto se quiseres outro local à partida.
As ligações "Ver no mapa" no programa (`data-local-link`) abrem o local certo.

## Publicar

Endereço: **https://franciscarafael.netlify.app/**

O site é servido pelo Netlify, ligado a este repositório do GitHub. Depois de alterares os ficheiros, faz *commit* e *push* para o ramo `main`; o Netlify publica sozinho, normalmente em um ou dois minutos.

- Configuração no Netlify: *build command* vazio e *publish directory* `.` (a raiz do repositório).
- O endereço e o nome do site mudam-se em *Site configuration → Change site name*, no painel do Netlify.
- Em *Deploys* vês o histórico de publicações e podes voltar a uma versão anterior com um clique.
- O GitHub Pages deixou de ser usado e deve ficar desligado em *Settings → Pages* do repositório.

### Pré-visualização ao partilhar

Quando o link é partilhado (WhatsApp, Facebook, etc.), aparece a imagem `assets/partilha.jpg` (1200×630, no estilo da capa do convite) com o título e a descrição definidos nas etiquetas `og:` do `<head>` do `index.html`.
Se o endereço do site mudar, atualiza `og:url`, `og:image` e `canonical`. O WhatsApp guarda a pré-visualização em cache durante algum tempo, por isso alterações podem demorar a aparecer em links já partilhados.

## Cores

O estilo segue os convites. As cores estão definidas no topo de `css/styles.css`: bordeaux (capa do convite), creme, azul acinzentado (cartão do programa), sálvia (cartão de confirmação) e verde-oliva (faixa do envelope).

## Tipos de letra

Vêm do Google Fonts, carregados no `<head>` do `index.html`:

- **Pinyon Script** — letra caligráfica, para os nomes e os títulos das secções.
- **Cormorant Garamond** — para o resto: texto, maiúsculas espaçadas (como "VAMOS CASAR") e itálicos.

Os divisores (linha · estrela · linha) usam a estrela definida no início do `<body>` do `index.html`: `<div class="ornamento">`.
