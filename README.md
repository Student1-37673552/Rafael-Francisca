# Site do Casamento — Francisca & Rafael

Site estático (HTML, CSS e JavaScript simples), sem build tools, alojado no GitHub Pages.
Para ver alterações em tempo real, abre `index.html` no browser ou usa a extensão "Live Server" no VS Code.

## Estrutura

```
├── index.html      → todo o conteúdo e secções
├── css/styles.css  → cores, tipografia e layout
├── js/script.js    → contador para o dia, menu mobile e efeito de aparecer ao fazer scroll
└── assets/         → logótipos (logo-completo.png e logo-medalhao.png) e fotografias
```

## Secções (por ordem)

1. **Topo** — logótipo, foto do casal, nomes, data e contador, sobre um fundo suave nas cores do casamento
2. **Em Fotografias** — galeria
3. **O Grande Dia** — programa
4. **Informação Prática** — dress code, estacionamento, alojamento, transporte, contactos
5. **Como Chegar** — dois separadores, Basílica (cerimónia) e Quinta da Bichinha (copo de água, jantar e festa), cada um com o seu mapa, morada e ligações
6. **Confirmar Presença** — as confirmações são feitas por chamada para a Francisca ou para o Rafael

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

- `assets/logo-completo.png` — moldura, monograma e nomes; usado no topo.
- `assets/logo-medalhao.png` — só a moldura com o monograma; usado no menu e no rodapé, onde o texto ficaria ilegível.

Para trocar o logótipo, substitui estes dois ficheiros mantendo os nomes (PNG com fundo transparente).

### Foto do casal

No topo, dentro do arco, está `assets/aroeira.jpeg`. Para trocar, muda o `src` da imagem no bloco `hero-photo` do `index.html`.

### Fundo do topo

O fundo do topo é uma lavagem suave de azul bebé, um rosado do bordeaux e um toque de verde-oliva sobre creme, definida em `.hero` no `css/styles.css`. Não tem padrões.

### Galeria

Cada foto é um bloco `.photo-placeholder` com uma `<img>` dentro. Para trocar ou juntar fotos, edita ou copia esses blocos em `index.html`.

### Como Chegar (mapas)

Os dois locais estão no bloco `LOCAIS` no início da secção final de `js/script.js`: morada, endereço do mapa incorporado, ligação "Abrir no Google Maps" e, na Quinta, a ligação para o site da Quinta.
Para acertar um ponto no mapa, abre o local no Google Maps, escolhe *Partilhar → Incorporar um mapa* e troca o endereço `mapa` desse local. O local que aparece à partida é o que tem `aria-selected="true"` no `index.html`, e a moldura do mapa também começa com esse `src`, por isso muda os dois em conjunto se quiseres outro local à partida.
As ligações "Ver no mapa" no programa (`data-local-link`) abrem o local certo.

### Alojamento

O cartão de Alojamento indica que é possível reservar quarto dentro da Quinta da Bichinha e liga para `quintadabichinha.pt/reservas`.

## Publicar

O site é servido pelo GitHub Pages. Depois de alterares os ficheiros, faz *commit* e *push* para o ramo principal; a atualização demora normalmente um ou dois minutos.
O endereço aparece em *Settings → Pages* do repositório.

## Cores

Definidas no topo de `css/styles.css`: bordeaux, azul ardósia, verde oliva e azul bebé.
