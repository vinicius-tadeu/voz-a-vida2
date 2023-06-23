import React from "react";
import "./History.sass";

const History: React.FC = () => {
  return (
    <section className="sectionHistory" id="History">
      <h2>História</h2>
      <div>
      <p>
        O IVV surgiu da vontade da comunidade escolar em ajudar crianças com
        problemas da fala no ano de 2017, na região de Samambaia-DF, quando
        Patrícia Mourão, sua fundadora e Presidente do IVV reuniu um grupo de
        pessoas capacitadas e amigas: Responsáveis, Pedagogos, Fonoaudiólogos,
        Advogados, Gestores, dentre outros. A Fonoaudiologia é a área
        Educacional, que é voltada ao estudo e atuação para a promoção da
        Educação, em todos os níveis de ensino, onde o profissional exerce uma
        função de extrema importância dentro da Educação. Podendo operar de
        diversas formas e em todas as fases, desde a Educação Infantil até o
        Ensino Médio, é o profissional que tem o conhecimento sobre o
        desenvolvimento da Linguagem Oral e Escrita e todos os possíveis
        diagnósticos que podem ocorrer durante cada período escolar. Que
        compreende sobre os processos de Aprendizagem e seus transtornos, e é
        capaz de avaliar, monitorar, orientar, encaminhar e desenvolver ações
        que facilitem o desempenho dos alunos.
      </p>
      </div>
      <img src="/Storybook.gif" alt="Animação de um livro abrindo." />
    </section>
  );
};

export { History };
