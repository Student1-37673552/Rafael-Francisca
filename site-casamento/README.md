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
