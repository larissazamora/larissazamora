/* =============================================================
   CONTEÚDO DO SITE — edite aqui
   -------------------------------------------------------------
   Marcas, vídeos, prints, cupons, fotos de lifestyle e contatos
   ficam neste arquivo. Depois de editar, salve e recarregue a página.

   Dicas:
   - Textos ficam entre aspas simples: 'assim'.
   - Cada item de uma lista termina com vírgula.
   - Caminhos de arquivos são relativos à pasta do site,
     por exemplo 'videos/otica.mp4' ou 'prints/feedback-1.jpg'.
   ============================================================= */
window.CONTEUDO = {

  /* ---------- Contato ---------- */
  // WhatsApp: 55 + DDD + número, só números. Ex.: '5511987654321'
  // Enquanto estiver vazio, o botão abre o WhatsApp para escolher o contato.
  whatsapp: '5544999608960',
  mensagemPadrao: 'Olá, Larissa! 👋 Vim pelo seu site e gostaria de conversar sobre uma parceria.',
  email: 'larissazamora@hotmail.com',
  redes: {
    instagram: 'https://www.instagram.com/larissazamora/',
    tiktok: 'https://www.tiktok.com/@laari.lz',
    linkedin: 'https://br.linkedin.com/in/larissazamora',
  },

  // Foto principal do topo (vertical). Ex.: 'img/larissa.jpg'
  fotoPerfil: '',

  /* ---------- Marcas (adesivos) ----------
     cor:    navy | caramel | cream | brown | sand | dusty | cocoa | blue
     estilo: serif | caps | sans | script | display   (tipo de letra do nome)
     logo:   opcional. Ex.: 'img/logos/otica.png' (de preferência PNG com fundo transparente)
  */
  marcas: [
    { nome: 'Permita',        tag: 'Campanha UGC · MIS',            cor: 'navy',    estilo: 'serif' },
    { nome: 'Marca parceira', tag: 'Parceria paga · Creators Ads',  cor: 'caramel', estilo: 'caps' },
    { nome: 'Pizzaria',       tag: 'Publi · gastronomia',           cor: 'brown',   estilo: 'script' },
    { nome: 'Lanchonete',     tag: 'Publi · gastronomia',           cor: 'sand',    estilo: 'sans' },
    { nome: 'Ótica',          tag: 'Parceria · óculos',             cor: 'cream',   estilo: 'display' },
    { nome: 'Studio Pilates', tag: 'Experiência · bem-estar',       cor: 'dusty',   estilo: 'serif' },
    { nome: 'Acessórios',     tag: 'Publi · moda',                  cor: 'cocoa',   estilo: 'script' },
  ],

  /* ---------- Vídeos ----------
     categoria: ugc | experiencias | produtos | lifestyle   (usada nos filtros)
     src:    arquivo do vídeo na pasta videos/. Ex.: 'videos/otica.mp4'
     capa:   imagem de capa (opcional). Ex.: 'videos/otica.jpg'
     link:   endereço do post no Instagram/TikTok (usado quando não houver src)
  */
  videos: [
    { marca: 'Permita',        titulo: 'Campanha via MIS',             tipo: 'UGC',         categoria: 'ugc',          src: '', capa: '', link: '' },
    { marca: 'Marca parceira', titulo: 'Parceria paga · Creators Ads', tipo: 'UGC',         categoria: 'ugc',          src: '', capa: '', link: '' },
    { marca: 'Ótica',          titulo: 'Escolhendo óculos novos',      tipo: 'Publi',       categoria: 'produtos',     src: '', capa: '', link: '' },
    { marca: 'Pizzaria',       titulo: 'Noite de pizza',               tipo: 'Experiência', categoria: 'experiencias', src: '', capa: '', link: '' },
    { marca: 'Studio Pilates', titulo: 'Minha aula de pilates',        tipo: 'Experiência', categoria: 'experiencias', src: '', capa: '', link: '' },
    { marca: 'Lanchonete',     titulo: 'O lanche mais pedido',         tipo: 'Experiência', categoria: 'experiencias', src: '', capa: '', link: '' },
    { marca: 'Acessórios',     titulo: 'Recebidos do mês',             tipo: 'Publi',       categoria: 'produtos',     src: '', capa: '', link: '' },
    { marca: 'Viagens',        titulo: 'Diário de viagem',             tipo: 'Lifestyle',   categoria: 'lifestyle',    src: '', capa: '', link: '' },
    { marca: 'Humor',          titulo: 'Situações do dia a dia',       tipo: 'Humor',       categoria: 'lifestyle',    src: '', capa: '', link: '' },
  ],

  /* ---------- Feedbacks (prints) ----------
     img: print salvo na pasta prints/. Ex.: 'prints/feedback-otica.jpg'
  */
  feedbacks: [
    { marca: 'Permita',        img: '' },
    { marca: 'Ótica',          img: '' },
    { marca: 'Pizzaria',       img: '' },
    { marca: 'Studio Pilates', img: '' },
    { marca: 'Marca parceira', img: '' },
    { marca: 'Acessórios',     img: '' },
  ],

  /* ---------- Cupons ----------
     valor + sufixo aparecem no canhoto do cupom (ex.: '10%' + 'off').
     Os cupons abaixo são EXEMPLOS: troque pelos códigos reais.
  */
  cupons: [
    { empresa: 'Ótica',          categoria: 'Óculos',    valor: '10%', sufixo: 'off',         detalhe: '10% de desconto em armações e óculos de sol.', codigo: 'LARI10',      link: '' },
    { empresa: 'Acessórios',     categoria: 'Moda',      valor: '15%', sufixo: 'off',         detalhe: '15% de desconto em todo o site.',              codigo: 'LARISSA15',   link: '' },
    { empresa: 'Studio Pilates', categoria: 'Bem-estar', valor: '1ª',  sufixo: 'aula grátis', detalhe: 'Aula experimental grátis para novos alunos.',  codigo: 'LARIPILATES', link: '' },
  ],

  /* ---------- Lifestyle ----------
     img:  foto na pasta img/. Ex.: 'img/viagem-praia.jpg'
     cena: ilustração provisória enquanto não há foto:
           praia | serra | cidade | cafe | bemestar | humor
     link: opcional, abre um post ao clicar
  */
  lifestyle: [
    { legenda: 'Fim de tarde perfeito', tag: 'Viagens',    cena: 'praia',    img: '', link: '' },
    { legenda: 'Respirando ar puro',    tag: 'Viagens',    cena: 'serra',    img: '', link: '' },
    { legenda: 'Explorando a cidade',   tag: 'Passeios',   cena: 'cidade',   img: '', link: '' },
    { legenda: 'Café com calma',        tag: 'Rotina',     cena: 'cafe',     img: '', link: '' },
    { legenda: 'Corpo e mente em dia',  tag: 'Bem-estar',  cena: 'bemestar', img: '', link: '' },
    { legenda: 'Rindo de mim mesma',    tag: 'Humor',      cena: 'humor',    img: '', link: '' },
  ],
};
