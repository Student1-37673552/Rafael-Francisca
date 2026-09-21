# Site do Casamento — Francisca & Rafael

Site estático (HTML, CSS e JavaScript simples), sem build tools, alojado no GitHub Pages.
Para ver alterações em tempo real, abre `index.html` no browser ou usa a extensão "Live Server" no VS Code.

## Estrutura

```
├── index.html      → todo o conteúdo e secções
├── css/styles.css  → cores, tipografia e layout
├── js/script.js    → contador para o dia, menu mobile e efeito de aparecer ao fazer scroll
└── assets/         → logótipos e fotografias
```

## Secções (por ordem)

1. **Topo** — monograma, foto do casal, nomes, data e contador
2. **Em Fotografias** — galeria
3. **O Grande Dia** — programa
4. **Informação Prática** — dress code, estacionamento, alojamento, transporte, contactos
5. **Como Chegar** — mapa da Quinta da Bichinha (Google Maps) e ligações para a Basílica e para o site da Quinta
6. **Confirmar Presença** — as confirmações são feitas por chamada para a Francisca ou para o Rafael

Não há formulário de RSVP nem ligação a Google Sheets: quem quiser confirmar liga a um dos noivos.

## Informação em falta

Neste momento não há nada por preencher. Se acrescentares algo provisório, marca-o com `<mark class="falta">…</mark>` no `index.html`
(aparece com um sublinhado tracejado e em itálico) e pesquisa depois por `class="falta"` para o encontrares. Quando estiver confirmado, apaga a etiqueta `<mark>` e deixa só o texto.

A cerimónia aparece às 11:30 (a missa é na verdade às 12h, mas é a hora que damos aos convidados). O copo de água é às 14:00. O jantar não tem hora indicada, e a festa vai das 14h às 4h da manhã.
Se a hora da cerimónia mudar, atualiza também `DATA_CASAMENTO` em `js/script.js`, que alimenta o contador.

### Números de telefone

Em "Confirmar Presença" os números da Francisca e do Rafael são ligações de chamada (`<a href="tel:+351…">`). Em telemóvel, tocar no número abre logo a chamada. Se mudarem, edita o `href` e o texto visível nos dois cartões.

### Foto do casal

No topo há um arco reservado para a foto. Para a pôr, guarda a imagem em `assets/` e troca o bloco `hero-photo--vazio` por:

```html
<div class="hero-photo"><img src="assets/nome-da-foto.jpg" alt="Francisca e Rafael"></div>
```

### Galeria

Cada foto é um bloco `.photo-placeholder` com uma `<img>` dentro. Para trocar ou juntar fotos, edita ou copia esses blocos em `index.html`.

### Mapa

O mapa usa a morada da Quinta da Bichinha (Vila Chã, 2580-413 Ventosa, Alenquer). Se quiseres um ponto mais exato, abre o local no Google Maps, escolhe *Partilhar → Incorporar um mapa* e substitui o `src` do `<iframe>`.

### Alojamento

O cartão de Alojamento indica que é possível reservar quarto dentro da Quinta da Bichinha e liga para `quintadabichinha.pt/reservas`.

## Publicar

O site é servido pelo GitHub Pages. Depois de alterares os ficheiros, faz *commit* e *push* para o ramo principal; a atualização demora normalmente um ou dois minutos.
O endereço aparece em *Settings → Pages* do repositório.

## Cores

Definidas no topo de `css/styles.css`: bordeaux, azul ardósia, verde oliva e azul bebé.
