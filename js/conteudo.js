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
  fotoPerfil: 'img/larissa.jpg',

  /* ---------- Marcas (adesivos) ----------
     cor:    navy | caramel | cream | brown | sand | dusty | cocoa | blue
             ou a cor da marca em código, ex.: '#2D8A80'
     estilo: serif | caps | sans | script | display   (tipo de letra do nome)
     logo:   opcional. Ex.: 'img/logos/otica.png' (de preferência PNG com fundo transparente)
     logoTamanho: largura da logo em % do adesivo (padrão 54). Acima de ~60 a dobra pode cobrir a logo.
     tag:    não aparece embaixo do adesivo; só surge ao passar o mouse.
     A ordem da lista é a ordem dos adesivos no site.
  */
  marcas: [
    { nome: 'NIVEA',          tag: 'Parceria paga',                 cor: '#0033A0', estilo: 'caps', logo: 'img/logos/nivea.png', logoTamanho: 70 },
    { nome: 'Óticas Prevent', tag: 'Parceria · óculos',             cor: '#2D8A80', estilo: 'display', logo: 'img/logos/oticas-prevent.png', logoTamanho: 72 },

    // Guardados para depois. Para voltar a mostrar um adesivo, apague as // do começo da linha.
    // { nome: 'Permita',        tag: 'Campanha UGC · MIS',            cor: 'navy',    estilo: 'serif' },
    // { nome: 'Pizzaria',       tag: 'Publi · gastronomia',           cor: 'brown',   estilo: 'script' },
    // { nome: 'Lanchonete',     tag: 'Publi · gastronomia',           cor: 'sand',    estilo: 'sans' },
    // { nome: 'Flow Fisioterapia e Pilates', tag: 'Experiência · bem-estar', cor: 'cream', estilo: 'serif', logo: 'img/logos/flow-pilates.png', logoTamanho: 57 },
    // { nome: 'Acessórios',     tag: 'Publi · moda',                  cor: 'cocoa',   estilo: 'script' },
  ],

  // Adesivo "Sua marca aqui" no fim da lista: true = mostra, false = esconde
  adesivoSuaMarca: true,

  /* ---------- Vídeos ----------
     categoria: ugc | experiencias | produtos | lifestyle   (usada nos filtros)
     src:    arquivo do vídeo na pasta videos/. Ex.: 'videos/otica.mp4'
     capa:   imagem de capa (opcional). Ex.: 'videos/otica.jpg'
     link:   endereço do post no Instagram/TikTok (usado quando não houver src)
  */
  videos: [
    { marca: 'Óticas Prevent', titulo: 'Experiência na loja',          tipo: 'Parceria',    categoria: 'produtos',     src: 'videos/oticas-prevent.mp4', capa: 'videos/oticas-prevent.jpg', link: '' },
    { marca: 'Plataforma Creators Ads', titulo: 'Conteúdo por convite', tipo: 'Divulgação', categoria: 'ugc',          src: 'videos/creators-ads.mp4', capa: 'videos/creators-ads.jpg', link: '' },
    { marca: 'Putz Ki Fome',   titulo: 'Gastronomia',                  tipo: 'Parceria',    categoria: 'experiencias', src: 'videos/putz-ki-fome.mp4', capa: 'videos/putz-ki-fome.jpg', link: '' },
    { marca: 'NIVEA Facial Vitamina C 7 em 1', titulo: 'Campanha intermediada pela Creators Ads e Beiersdorf', tipo: 'Publi', categoria: 'ugc', src: 'videos/nivea-vitamina-c.mp4', capa: 'videos/nivea-vitamina-c.jpg', link: '' },
    { marca: 'Zero Pizza / Pizzaria Artesanal', titulo: 'Gastronomia',     tipo: 'Parceria',    categoria: 'experiencias', src: 'videos/zero-pizza.mp4', capa: 'videos/zero-pizza.jpg', link: '' },
    { marca: 'Óticas Prevent', titulo: 'Óculos solares e de grau',     tipo: 'Unboxing',    categoria: 'produtos',     src: 'videos/oticas-prevent-unboxing.mp4', capa: 'videos/oticas-prevent-unboxing.jpg', link: '' },
    { marca: 'Permita',        titulo: 'Campanha via MIS',             tipo: 'UGC',         categoria: 'ugc',          src: '', capa: '', link: '' },
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
    { marca: 'Óticas Prevent', img: 'prints/oticas-prevent-1.jpg' },
    { marca: 'Permita',        img: '' },
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
