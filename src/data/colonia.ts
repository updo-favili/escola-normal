// Conteúdo da Colônia de Férias "Academia de Heróis" (briefing + artes da escola)

export const horario = '7h30 às 11h30';

export interface Semana {
  id: 'semana-1' | 'semana-2' | 'semana-3';
  nome: string;
  periodo: string;
  observacao?: string;
  // valores por quantidade de filhos (1, 2, 3)
  pix: [number, number, number];
  cartao: [number, number, number];
}

const valoresCheios = {
  pix: [144, 252, 351] as [number, number, number],
  cartao: [170, 298, 415] as [number, number, number],
};

export const semanas: Semana[] = [
  { id: 'semana-1', nome: '1ª semana', periodo: '30/11 a 04/12', ...valoresCheios },
  {
    id: 'semana-2',
    nome: '2ª semana',
    periodo: '07/12 a 11/12',
    observacao: '1 dia a menos · valor proporcional',
    pix: [115.2, 201.6, 280.8],
    cartao: [136, 238, 332],
  },
  { id: 'semana-3', nome: '3ª semana', periodo: '14/12 a 18/12', ...valoresCheios },
];

export const missoes = [
  {
    titulo: 'Missões secretas e surpresas',
    texto: 'Cada dia guarda uma missão nova, preparada pela equipe para surpreender os pequenos heróis.',
    icone: 'mask',
  },
  {
    titulo: 'Treinamento dos pequenos heróis',
    texto: 'Brincadeiras dirigidas e atividades recreativas para gastar energia e fazer amigos.',
    icone: 'shield',
  },
  {
    titulo: 'Desafios e aventuras heroicas',
    texto: 'Gincanas e desafios em equipe, com muita diversão do começo ao fim.',
    icone: 'bolt',
  },
  {
    titulo: 'Missões aquáticas',
    texto: 'Banho de tanque para refrescar as manhãs de dezembro.',
    icone: 'wave',
  },
  {
    titulo: 'Laboratório dos superpoderes',
    texto: 'Experiências e descobertas para despertar a curiosidade de cada herói.',
    icone: 'flask',
  },
] as const;

export const formasPagamento = 'PIX, dinheiro ou cartão de crédito em até 6x';

export const brinde = {
  prazo: '30/10',
  prazoDia: 'sexta-feira',
  texto: 'Inscreva-se até 30/10 e ganhe uma camiseta exclusiva da Academia de Heróis.',
};

export const indicacao = {
  desconto: '30%',
  regras:
    'Válido para indicação de criança que não seja atualmente aluna da Escola Normal. Os dois precisam se inscrever na mesma semana. Desconto não cumulativo com outras promoções.',
};

export const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: v % 1 ? 2 : 0 });
