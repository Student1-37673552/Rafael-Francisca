# Site do Casamento — Rafael & Francisca

Esboço inicial do site. Estrutura simples, sem build tools — abre `index.html` diretamente no browser ou usa a extensão "Live Server" no VS Code para veres alterações em tempo real.

## Estrutura

```
site-casamento/
├── index.html        → todo o conteúdo e secções
├── css/styles.css     → sistema de design (cores, tipografia, layout)
├── js/script.js       → contador para o dia + menu mobile + RSVP (placeholder)
└── assets/            → pasta vazia, para fotos quando as tiveres
```

## Novidades desta versão

- Nomes trocados: **Francisca & Rafael** em todo o site
- Nova secção **"Em Fotografias"** com 6 placeholders para fotos (ver como adicionar fotos reais, abaixo)
- Placeholder circular de foto no hero, por cima dos nomes
- Efeitos: as secções e cartões aparecem com um suave fade-up ao fazer scroll; confetti dispara quando alguém confirma presença no RSVP

## Como funciona o RSVP — ligado à tua Google Sheet

O formulário está preparado para enviar cada confirmação como uma nova linha numa Google Sheet tua. Faltam só 4 passos (10 minutos):

### 1. Criar a Sheet
Cria uma Google Sheet nova. Na primeira linha, mete os cabeçalhos: `Data | Nome | Presença | Acompanhantes | Restrições`

### 2. Colar o script
Abre **Extensões → Apps Script** dentro dessa Sheet, apaga o que lá estiver e cola o conteúdo do ficheiro `google-apps-script/Codigo.gs` (está nesta pasta). Guarda.

### 3. Publicar
`Deploy → New deployment` → tipo **Web app** → *Execute as*: a tua conta, *Who has access*: **Anyone** → `Deploy`. Autoriza o acesso quando pedir (é normal aparecer o aviso "Google hasn't verified this app" — é um script teu, podes avançar em *Advanced → Go to [projeto] (unsafe)*).

### 4. Ligar ao site
Copia o URL que o Google te dá no fim (algo como `https://script.google.com/macros/s/.../exec`) e cola-o em `js/script.js`, nesta linha:

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTQ0berbmJik7KX9XulC4ehrCuTWS4y06V9VkgH1p2pV7MeU6CbMCZIS1xF-SqVsCdAQ/exec";
```

Substitui o texto entre aspas pelo URL. Guarda, faz commit/push, e o formulário passa a escrever diretamente na tua Sheet — cada confirmação aparece como uma linha nova, em tempo real.

**Nota:** enquanto o `GOOGLE_SCRIPT_URL` não for substituído, o site mostra um aviso a lembrar que falta este passo, em vez de tentar enviar para o sítio errado.

## Como adicionar fotos reais

Os placeholders (📷) na secção "Em Fotografias" e no hero são só para veres o layout. Para colocar fotos verdadeiras:

1. Põe as imagens dentro da pasta `assets/` (ex. `assets/foto1.jpg`)
2. No `index.html`, substitui cada `<div class="photo-placeholder">...</div>` por `<div class="photo-placeholder"><img src="assets/foto1.jpg" alt="descrição da foto"></div>`
3. Diz-me quando tiveres as fotos escolhidas que eu faço esta troca toda de uma vez, incluindo o ajuste de CSS para as imagens ficarem bem enquadradas

## O que já está feito

- Hero com contador em tempo real até 24/10/2027 às 15:30 (atualiza automaticamente quando mudares a data em `script.js`)
- Secção "A Nossa História" com timeline de 4 momentos
- Secção "O Grande Dia" com horário da cerimónia, cocktail, jantar e festa
- Secção "Informação Prática" (dress code, estacionamento, alojamento, transporte, lista de presentes, contactos)
- Secção "Como Chegar" com placeholder para mapa
- Formulário de RSVP (ainda não envia dados para lado nenhum — ver abaixo)
- Totalmente responsivo, com menu mobile

## Tudo o que tem `[PLACEHOLDER: ...]` precisa de ser substituído com informação real

Procura por `[PLACEHOLDER` no `index.html` — são todos os pontos que faltam preencher: história, morada da cerimónia e receção, horários exatos, dress code, alojamento, etc.

## Próximos passos (quando tiveres a info)

1. Substituir todos os placeholders por conteúdo real
2. Adicionar fotos vossas na pasta `assets/` e no hero/história
3. Ligar o formulário de RSVP a um destino real — as opções mais simples sem servidor próprio:
   - **Netlify Forms** (grátis, funciona automaticamente se fizeres deploy no Netlify)
   - **Formspree** (grátis até um limite, funciona em qualquer hosting)
   - **Google Sheets via Google Apps Script** (mais trabalho, mas guarda tudo numa sheet)
4. Adicionar o Google Maps embed real na secção "Como Chegar"
5. Deploy:
   - **Netlify**: arrastar a pasta para [app.netlify.com/drop](https://app.netlify.com/drop) — mais simples possível
   - **GitHub Pages**: criar repo, fazer push, ativar Pages nas definições
   - Depois, se quiserem, comprar um domínio (ex. `rafaelefrancisca.pt`) e apontá-lo para o hosting

## Sistema de design

- **Cores**: vinho `#6B2737`, azul-azulejo `#2C5F6F`, dourado `#C9973F`, pergaminho `#F5EDE0`
- **Tipografia**: Fraunces (títulos) + Karla (texto corrido) — via Google Fonts
- **Motivo assinatura**: padrão inspirado em azulejos portugueses, usado como textura no hero e como divisores entre secções
