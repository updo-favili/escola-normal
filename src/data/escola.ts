export const contato = {
  telefone: '(88) 3423.1473',
  telefoneHref: 'tel:+558834231473',
  instagram: '@escolanormallimoeiro',
  instagramHref: 'https://www.instagram.com/escolanormallimoeiro/',
  cidade: 'Limoeiro do Norte – CE',
  endereco: 'Av. Dom Aureliano Matos, 1759',
  bairro: 'Centro · Limoeiro do Norte/CE · 62930-000',
  mapaEmbed:
    'https://maps.google.com/maps?q=Escola+Normal+Rural+de+Limoeiro,+Av.+Dom+Aureliano+Matos,+1759,+Limoeiro+do+Norte+-+CE&z=16&output=embed',
  comoChegar:
    'https://www.google.com/maps/dir/?api=1&destination=Escola+Normal+Rural+de+Limoeiro,+Av.+Dom+Aureliano+Matos,+1759,+Limoeiro+do+Norte+-+CE',
};

export interface Segmento {
  id: string;
  nome: string;
  tabLabel: string;
  faixa: string;
  foco: string;
  diferencial: string;
  fotos: string[];
  fotoAlt: string;
  grupos: { titulo: string; itens: string[] }[];
}

export const segmentos: Segmento[] = [
  {
    id: 'infantil',
    fotos: [
      '/images/escola/segmentos/infantil/01.jpg',
      '/images/escola/segmentos/infantil/02.jpg',
      '/images/escola/segmentos/infantil/03.jpg',
      '/images/escola/segmentos/infantil/04.jpg',
      '/images/escola/segmentos/infantil/05.jpg',
      '/images/escola/segmentos/infantil/06.jpg',
    ],
    fotoAlt: 'Alunos da Educação Infantil em atividades na escola',
    nome: 'Educação Infantil',
    tabLabel: 'Educação Infantil',
    faixa: 'Infantil 1 ao Infantil 5 · a partir de 1 ano',
    foco: 'Acolhimento, descobertas e autonomia. A criança aprende vivendo experiências, com acompanhamento de perto em cada fase.',
    diferencial:
      'Uma Educação Infantil que combina acolhimento, experiências práticas, desenvolvimento socioemocional e acompanhamento especializado.',
    grupos: [
      {
        titulo: 'Espaços de aprendizagem',
        itens: [
          'Laboratório de Movimentos com psicomotricista',
          'Laboratório Lego Education',
          'Brinquedoteca e Biblioteca Infantil',
          'Cozinha Experimental',
        ],
      },
      {
        titulo: 'Projetos',
        itens: [
          'Inglês a partir dos 2 anos',
          'Musicalização',
          'Projeto Leitura Viva',
          'Projeto ArtEfato',
          'Alimentação Saudável com nutricionista',
          'Inteligência de Vida a partir dos 3 anos',
          'Feira do Empreendedorismo a partir dos 3 anos',
        ],
      },
      {
        titulo: 'Esporte e cultura',
        itens: [
          'Dança, Ballet, Karatê e Corpo e Movimento',
          'Ginástica Olímpica (Infantil 5)',
          'Futsal Infantil (Infantil 5)',
          'Semana Esportiva Cultural',
          'Cerimônia do Caderno',
        ],
      },
      {
        titulo: 'Acompanhamento',
        itens: [
          'Projeto Farol: nutricionista, psicóloga e psicomotricista',
          'Simuladinho semestral (Infantil 5)',
          'EN360 · Desenvolvimento Integral',
        ],
      },
    ],
  },
  {
    id: 'fund1',
    fotos: [
      '/images/escola/segmentos/fund1/01.jpg',
      '/images/escola/segmentos/fund1/02.jpg',
      '/images/escola/segmentos/fund1/03.jpg',
      '/images/escola/segmentos/fund1/04.jpg',
      '/images/escola/segmentos/fund1/05.jpg',
      '/images/escola/segmentos/fund1/06.jpg',
    ],
    fotoAlt: 'Alunos do Fundamental I em atividades na escola',
    nome: 'Ensino Fundamental I',
    tabLabel: 'Fundamental I',
    faixa: '1º ao 5º ano',
    foco: 'Alfabetização sólida, criatividade e autonomia, com tecnologia, leitura e esporte fazendo parte da rotina.',
    diferencial:
      'Ensino que fortalece a aprendizagem acadêmica e amplia as oportunidades de desenvolvimento por meio de tecnologia, esporte, leitura e experiências práticas.',
    grupos: [
      {
        titulo: 'Tecnologia e laboratórios',
        itens: [
          'EN Maker',
          'Laboratório de Informática',
          'Laboratórios Multidisciplinares a partir do 2º ano',
          'Sala de Movimentos (1º ao 3º ano)',
          'Cozinha Experimental e Biblioteca',
        ],
      },
      {
        titulo: 'Projetos',
        itens: [
          'Projeto Escrever+: literatura e redação',
          'Doutores da Leitura (1º ano)',
          'Musicalidade e ArtEfato (1º ao 3º ano)',
          'Feira do Empreendedorismo',
          'Cerimônia da Caneta (5º ano)',
        ],
      },
      {
        titulo: 'Esporte e cultura',
        itens: [
          'Academia Olímpicos: dança, coral, ballet, karatê, teatro e mais',
          'DEEN: vôlei, futsal, basquete, xadrez, beach tennis e mais',
          'Viagens Pedagógicas',
          'Semana Esportiva Cultural',
        ],
      },
      {
        titulo: 'Acompanhamento',
        itens: [
          'Projeto Farol e Inteligência de Vida',
          'Dois simulados presenciais por ano',
          'Setor Olímpico',
          'EN360 com opções de alimentação',
        ],
      },
    ],
  },
  {
    id: 'fund2',
    fotos: [
      '/images/escola/segmentos/fund2/01.jpg',
      '/images/escola/segmentos/fund2/02.jpg',
      '/images/escola/segmentos/fund2/03.jpg',
      '/images/escola/segmentos/fund2/04.jpg',
      '/images/escola/segmentos/fund2/05.jpg',
      '/images/escola/segmentos/fund2/06.jpg',
    ],
    fotoAlt: 'Alunos do Fundamental II em atividades na escola',
    nome: 'Ensino Fundamental II',
    tabLabel: 'Fundamental II',
    faixa: '6º ao 9º ano',
    foco: 'Aprofundamento acadêmico e autonomia, preparando o aluno para o Ensino Médio sem deixar de lado o lado socioemocional.',
    diferencial:
      'Preparação acadêmica contínua, com avaliações periódicas, desenvolvimento socioemocional e incentivo às olimpíadas e às atividades extracurriculares.',
    grupos: [
      {
        titulo: 'Tecnologia e laboratórios',
        itens: [
          'EN Maker (6º e 7º ano)',
          'Laboratório de Redação (8º e 9º ano)',
          'Laboratórios Multidisciplinares',
          'Laboratório de Informática',
        ],
      },
      {
        titulo: 'Avaliações',
        itens: [
          'Prova EDROS presencial a cada bimestre',
          'Avaliação Diagnóstica Poliedro',
          'Avaliações semanais',
          'Setor Olímpico',
        ],
      },
      {
        titulo: 'Projetos',
        itens: ['Feira de Ciências', 'Balaio Literário', 'Projeto Escrever+', 'Viagens Pedagógicas'],
      },
      {
        titulo: 'Esporte e cultura',
        itens: [
          'Academia Olímpicos e Fanfarra Dom Bosco',
          'DEEN: 7 modalidades esportivas',
          'Copa EN e Semana Esportiva Cultural',
          'EN360 (6º e 7º ano)',
        ],
      },
    ],
  },
  {
    id: 'medio',
    fotos: [
      '/images/escola/segmentos/medio/01.jpg',
      '/images/escola/segmentos/medio/02.jpg',
      '/images/escola/segmentos/medio/03.jpg',
      '/images/escola/segmentos/medio/04.jpg',
    ],
    fotoAlt: 'Alunos do Ensino Médio em atividades na escola',
    nome: 'Ensino Médio',
    tabLabel: 'Ensino Médio',
    faixa: '1ª à 3ª série',
    foco: 'Preparação para o ENEM e vestibulares, com protagonismo e um projeto de futuro construído junto com o aluno.',
    diferencial:
      'Preparação consistente para os vestibulares, com simulados frequentes, laboratórios especializados, orientação olímpica e competências para a vida.',
    grupos: [
      {
        titulo: 'Preparação para vestibulares',
        itens: [
          'Intensivo ENEM',
          '5 simulados ENEM por ano',
          '4 simulados FUVEST por ano',
          'Prova EDROS a cada bimestre (1ª e 2ª séries)',
          'Olimpíada de Matemática Poliedro',
        ],
      },
      {
        titulo: 'Laboratórios',
        itens: [
          'Laboratório de Redação',
          'Ciências da Natureza: Química, Física e Biologia',
          'Laboratório de Matemática',
        ],
      },
      {
        titulo: 'Protagonismo',
        itens: ['Feira de Ciências', 'Noite das Nações', 'Júri Simulado', 'Inteligência de Vida'],
      },
      {
        titulo: 'Esporte e cultura',
        itens: [
          'Academia Olímpicos e Fanfarra Dom Bosco',
          'DEEN: 7 modalidades esportivas',
          'Semana Esportiva Cultural',
        ],
      },
    ],
  },
];

export const series: { grupo: string; opcoes: string[] }[] = [
  {
    grupo: 'Educação Infantil',
    opcoes: ['Infantil 1', 'Infantil 2', 'Infantil 3', 'Infantil 4', 'Infantil 5'],
  },
  {
    grupo: 'Ensino Fundamental I',
    opcoes: ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'],
  },
  {
    grupo: 'Ensino Fundamental II',
    opcoes: ['6º ano', '7º ano', '8º ano', '9º ano'],
  },
  {
    grupo: 'Ensino Médio',
    opcoes: ['1ª série', '2ª série', '3ª série'],
  },
];

// Estrutura da escola (textos do site oficial, seção "Estrutura")
export const estrutura = [
  {
    nome: 'Laboratório Multidisciplinar',
    texto: 'Aprender na prática o conteúdo trabalhado em sala de aula, investigando e experimentando.',
    foto: '/images/escola/estrutura/multidisciplinar.jpg',
  },
  {
    nome: 'Laboratório de Anatomia',
    texto: 'Modelos e peças para estudar o corpo humano na prática, investigando e experimentando.',
    foto: '/images/escola/estrutura/anatomia.jpg',
  },
  {
    nome: 'EN Maker',
    texto: 'Espaço compartilhado onde os estudantes colocam em prática ideias e criações inovadoras, partindo do zero.',
    foto: '/images/escola/estrutura/maker.jpg',
  },
  {
    nome: 'Biblioteca',
    texto: 'Amplo acervo bibliográfico disponível para todos os alunos.',
    foto: '/images/escola/estrutura/biblioteca.jpg',
  },
  {
    nome: 'Museu',
    texto: 'Um museu nas instalações da escola, com a história da Escola Normal.',
    foto: '/images/escola/estrutura/museu.jpg',
  },
  {
    nome: 'Laboratório de Informática',
    texto: 'Computadores com acesso à internet e equipados com as melhores tecnologias.',
    foto: '/images/escola/estrutura/informatica.jpg',
  },
  {
    nome: 'Playgrounds',
    texto: 'Espaços para os momentos de recreação dos alunos.',
    foto: '/images/escola/estrutura/playgrounds.jpg',
  },
  {
    nome: 'Área de convivência',
    texto: 'Áreas que promovem a interação social entre os alunos.',
    foto: '/images/escola/estrutura/convivencia.jpg',
  },
];
