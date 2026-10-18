import RevealAnimation from '../animation/RevealAnimation';
import Doodle from './Doodle';
import Kicker from './Kicker';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const perguntas = [
  {
    id: '1',
    pergunta: 'A partir de que idade a escola recebe alunos?',
    resposta:
      'A partir de 1 ano, no Infantil 1, com a criança já andando. A escola acompanha o aluno até a 3ª série do Ensino Médio.',
  },
  {
    id: '2',
    pergunta: 'A escola tem período integral?',
    resposta:
      'Sim. O EN360, nosso Programa de Desenvolvimento Integral, atende a Educação Infantil, o Fundamental I e o 6º e 7º ano, com opções de alimentação.',
  },
  {
    id: '3',
    pergunta: 'Quais atividades extracurriculares são oferecidas?',
    resposta:
      'Na Academia Olímpicos há dança, coral, ginástica olímpica, ballet, karatê, teatro e Fanfarra Dom Bosco. No DEEN, o departamento de esportes, há vôlei, futsal, basquete, tênis de mesa, xadrez, badminton e beach tennis. As opções variam conforme a idade.',
  },
  {
    id: '4',
    pergunta: 'Como a escola acompanha o desenvolvimento do aluno?',
    resposta:
      'Pelo Projeto Farol, com nutricionista, psicóloga e psicomotricista, e pelo Laboratório Inteligência de Vida, voltado ao desenvolvimento socioemocional.',
  },
  {
    id: '5',
    pergunta: 'Posso agendar a visita para mais de um filho?',
    resposta: 'Pode, sim. No formulário você indica quantos filhos quer matricular e a série de cada um em 2027.',
  },
];

const Faq = () => {
  return (
    <section className="bg-grid-paper-soft relative overflow-hidden py-16 md:py-20 lg:py-[110px]" aria-label="Perguntas frequentes">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-16">
          <div className="relative col-span-12 space-y-4 text-center lg:col-span-5 lg:text-left">
            <Doodle variant="arrow" className="text-primary-500/70 absolute top-64 right-0 hidden w-28 -rotate-[30deg] lg:block" />
            <RevealAnimation delay={0.2}>
              <Kicker>Dúvidas frequentes</Kicker>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="font-normal">
                Antes de <span className="hand text-primary-500 text-[1.4em]">agendar sua visita</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[420px] lg:mx-0">
                O restante a gente conversa pessoalmente, durante a visita.
              </p>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <RevealAnimation delay={0.4}>
              <div>
                <Accordion className="w-full space-y-3" defaultValue="1">
                  {perguntas.map((item) => (
                    <AccordionItem className="rounded-[20px] bg-white px-5 md:px-6" key={item.id} value={item.id}>
                      <AccordionTrigger
                        titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-medium text-secondary"
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 md:py-6"
                        value={item.id}
                        iconType="arrow">
                        {item.pergunta}
                      </AccordionTrigger>
                      <AccordionContent value={item.id}>{item.resposta}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
