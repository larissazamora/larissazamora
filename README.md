# Larissa Zamora · portfólio

Site de portfólio da Larissa Zamora, criadora de conteúdo digital e UGC Creator.
É um site estático (HTML, CSS e JavaScript), sem instalação e sem build.

## Estrutura

```
larissazamora/
├── index.html        → estrutura da página e textos fixos (sobre, serviços, como funciona)
├── css/style.css     → visual (cores, fontes, layout)
├── js/conteudo.js    → ✏️ conteúdo editável: marcas, vídeos, prints, cupons, lifestyle, contatos
├── js/main.js        → comportamento (filtros, WhatsApp, cupons, animações)
├── img/              → foto principal e fotos de lifestyle
│   └── logos/        → logos das marcas (PNG com fundo transparente)
├── videos/           → vídeos de divulgação (.mp4) e capas (.jpg)
└── prints/           → prints de feedback das marcas
```

## Como editar o conteúdo

Quase tudo muda em **`js/conteudo.js`**:

| O que | Onde |
|---|---|
| Número do WhatsApp | `whatsapp: '5511987654321'` (55 + DDD + número) |
| Mensagem automática do WhatsApp | `mensagemPadrao` |
| Foto do topo | coloque em `img/` e preencha `fotoPerfil: 'img/larissa.jpg'` |
| Marcas | lista `marcas` (nome, legenda, cor, estilo da letra e logo opcional) |
| Vídeos | lista `videos` (arquivo em `videos/` ou link do post) |
| Prints de feedback | lista `feedbacks` (arquivo em `prints/`) |
| Cupons | lista `cupons` (os atuais são exemplos) |
| Lifestyle | lista `lifestyle` (foto em `img/`) |

Se uma lista ficar vazia (por exemplo, sem cupons), a seção some do site e do menu automaticamente.

### Vídeos

- Prefira `.mp4` verticais (9:16), comprimidos para menos de 10 MB cada.
  O GitHub não aceita arquivos acima de 100 MB.
- Para vídeos pesados, use o campo `link` com o endereço do Reels ou TikTok em vez de `src`.

## Ver no computador

Abra o arquivo `index.html` no navegador (duplo clique).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub chamado `larissazamora`.
2. Dentro desta pasta, rode:

   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/larissazamora.git
   git push -u origin main
   ```

3. No GitHub, abra **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` e salve.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/larissazamora/`.
