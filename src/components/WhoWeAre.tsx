import React from "react";
import "./WhoWeAre.sass";
import imagem1 from "/img1.svg";
import imagem2 from "/img2.svg";
import imagem3 from "/img3.svg";
import imagem4 from "/img4.svg";
import imagem5 from "/img5.svg";
import fires from "/Fires.svg";
import bigFires from "/bigFires.svg";

const WhoWeAre: React.FC = () => {
  return (
    <section className="sectionWWA" id="WhoWeAre">
      <img className="firesWWA" src={fires} alt="Fogos de artifício" />
      <img className="firesWWA second" src={fires} alt="Fogos de artifício" />
      <img className="bigFires" src={bigFires} alt="Fogos de artifício" />
      <h2 className="wwaTitle">Quem Somos</h2>
      <div className="wrapperFigures">
        <div className="wrapperFigure">
          <figure>
            <img
              src={imagem1}
              alt="Dr. Kénedy realizando uma consulta em um paciente."
            />
          </figure>
          <div>
            <h3 style={{textAlign:'center'}}>EDUCAÇÃO</h3>
            <p>
              A Educação só existe se existirem seu público-alvo que são os
              estudantes, por isso, somos um Instituto com um projeto que
              servirá como piloto na Região Administrativa de Samambaia, como
              piloto, tendo em vista que esta RA possui uma alta incidência de
              casos fonoaudiológicos e afins. Ele servirá de exemplo para
              futuras implantações em todas as RA's do Distrito Federal e outras
              Unidades da Federação.
            </p>
          </div>
        </div>
        <div className="wrapperFigure">
          <figure>
            <img
              src={imagem2}
              alt="Dr. Kénedy realizando uma consulta em um paciente."
            />
          </figure>
          <div>
            <h3 style={{textAlign:'center'}}>CAPACITAÇÃO</h3>
            <p>
              O IVV tem a pretensão de contribuir para sociedade capacitando
              jovens a serem doares de sangue autônomos e conscientes de seus
              deveres e suas responsabilidades, tendo já formado para tanto,
              mais de centenas de jovens. Temos muitos outros projetos além
              destes: PROJETO VOZ Á VIDA FONOAUDIOÓGOS EDUCACIONAL E CLINICO,
              EDUCAÇAO E LINGUAGEM NA DETECÇÃO DE PROBLEMAS DA FALA; PROJETO
              HORTA MEDICINAL; PROJETO VOLANTE (SAUDE E EDUCAÇAO).
            </p>
          </div>
        </div>
        <div className="wrapperFigure">
          <figure>
            <img
              src={imagem3}
              alt="Dr. Kénedy realizando uma consulta em um paciente."
            />
          </figure>
          <div>
            <h3 style={{textAlign:'center'}}>ALCANCE DA COMUNIDADE</h3>
            <p>
              O IVV procura atingir todos os segmentos da comunidade escolar,
              desde pais de alunos a gestores, pois acredita que só assim
              podemos mudar realmente a sociedade para melhor. Para tanto,
              fazemos parcerias com todos aqueles que estejam interessados em
              nos auxiliar neste intento.
            </p>
          </div>
        </div>
        <div className="wrapperFigure">
          <figure>
            <img
              src={imagem4}
              alt="Dr. Kénedy realizando uma consulta em um paciente."
            />
          </figure>
          <div>
          <h3 style={{textAlign:'center'}}>APOIADORES</h3>
            <p>
              As parcerias serão feitas preferencialmente com empresas públicas
              e privadas, instituições públicas e privadas, faculdades e
              univesidades que se compatibilizem com os objetivos do projeto.
              VENHA SER UM APOIADOR!!!!
            </p>
          </div>
        </div>
        <div className="wrapperFigure">
          <figure>
            <img
              src={imagem5}
              alt="Dr. Kénedy realizando uma consulta em um paciente."
            />
          </figure>
          <div>
          <h3 style={{textAlign:'center'}}>AÇÕES SOCIAIS</h3>
            <p>
              O Instituto Voz à Vida sempre participa de ações sociais
              periódicas e constantes procurando atender a população mais
              carente chegando onde o Estado às vezes não consegue chegar.
              Precisando, pode nos contactar, estamos sempre a disposição!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhoWeAre };
