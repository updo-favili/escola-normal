import { contato } from '@/data/escola';
import { formasPagamento, horario } from '@/data/colonia';
import logoOlimpicos from '@public/images/colonia/logo-olimpicos.png';
import crest from '@public/images/escola/logo.png';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Titulo } from './Missoes';

const perguntas = [
  {
    id: '1',
    pergunta: 'Quem pode participar?',
    resposta:
      'Alunos da Escola Normal e crianças de fora. Quem trouxer um amiguinho que não estuda na escola ganha 30% de desconto para os dois.',
  },
  {
    id: '2',
    pergunta: 'Qual é o horário?',
    resposta: `Todas as manhãs, das ${horario}, nas três semanas de dezembro.`,
  },
  {
    id: '3',
    pergunta: 'Posso escolher mais de uma semana?',
    resposta:
      'Pode. As semanas são independentes: escolha uma, duas ou as três. O valor total é a soma das semanas escolhidas.',
  },
  {
    id: '4',
    pergunta: 'Por que a 2ª semana é mais barata?',
    resposta: 'Ela tem um dia de atividade a menos, então o valor é proporcional.',
  },
  {
    id: '5',
    pergunta: 'Como faço o pagamento?',
    resposta: `Na tesouraria da Escola Normal: ${formasPagamento}. Depois da pré-inscrição, nossa equipe chama você pelo WhatsApp para confirmar.`,
  },
  {
    id: '6',
    pergunta: 'Como ganho a camiseta?',
    resposta: 'Inscrições realizadas até 30/10 (sexta-feira) ganham a camiseta exclusiva da Academia de Heróis.',
  },
];

export const FaqColonia = () => (
  <section className="py-16 md:py-20 lg:py-[110px]" aria-label="Perguntas frequentes">
    <div className="main-container max-w-[880px]">
      <Titulo tag="Dúvidas">
        Antes da <span className="text-heroi-red">missão começar</span>
      </Titulo>
      <div>
        <Accordion className="w-full space-y-3" defaultValue="1">
          {perguntas.map((item) => (
            <AccordionItem
              className="border-stroke-2 rounded-[20px] border bg-white px-5 md:px-6"
              key={item.id}
              value={item.id}>
              <AccordionTrigger
                titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-semibold text-heroi-navy"
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5"
                value={item.id}
                iconType="arrow">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent value={item.id}>{item.resposta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export const ChamadaColonia = () => (
  <section className="px-3 pb-16 md:px-5 md:pb-20">
    <div className="from-heroi-blue to-heroi-navy relative overflow-hidden rounded-[32px] bg-linear-to-br px-6 py-14 text-center md:rounded-[40px] md:py-20">
      <div aria-hidden className="bg-halftone-light pointer-events-none absolute inset-0" />
      <span aria-hidden className="bg-heroi-red absolute -top-14 -right-14 size-36 rotate-45" />
      <span aria-hidden className="bg-heroi-red absolute -bottom-14 -left-14 size-36 rotate-45" />
      <div className="relative mx-auto max-w-[720px] space-y-5">
        <h2 className="font-heroi text-[44px] text-white md:text-[64px]">
          A missão está <span className="text-ns-yellow">prestes a começar!</span>
        </h2>
        <p className="text-white/80">Garanta a vaga do seu pequeno herói na Colônia de Férias da Escola Normal.</p>
        <a
          href="#inscricao"
          className="bg-heroi-red hover:bg-heroi-red-dark font-heroi inline-block rounded-full px-10 py-4 text-2xl text-white transition-colors">
          Garantir minha vaga
        </a>
      </div>
    </div>
  </section>
);

export const FooterColonia = () => (
  <footer className="border-stroke-2 border-t bg-white">
    <div className="main-container flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
      <div className="flex items-center gap-5">
        <Image src={logoOlimpicos} alt="Academia Olímpicos · Escola Normal" className="h-10 w-auto" />
        <span className="bg-stroke-3 h-10 w-px" />
        <Image src={crest} alt="Escola Normal Rural de Limoeiro do Norte" className="h-12 w-auto" />
      </div>
      <p className="text-tagline-2 text-secondary/60">
        {contato.endereco} · {contato.cidade}
      </p>
    </div>
    <p className="text-tagline-3 text-secondary/50 border-stroke-2 border-t py-5 text-center">
      © {new Date().getFullYear()} Escola Normal Rural de Limoeiro do Norte
    </p>
  </footer>
);
