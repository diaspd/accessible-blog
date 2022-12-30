import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <article className={styles.content} >
      <h1>Mais sobre acessibilidade</h1>
        <p>Acessibilidade pode ser definida como a possibilidade e condição de alcance, percepção e entendimento para a utilização, em igualdade de oportunidades, com segurança e autonomia, do meio físico, do transporte, da informação e da comunicação, inclusive dos sistemas e tecnologias de informação e comunicação, bem como de outros serviços e instalações. Para as pessoas com deficiência e mobilidade reduzida, a acessibilidade possibilita uma vida independente e com participação plena em todos os seus aspectos; e para todas as pessoas, em diferentes contextos, pode proporcionar maior conforto, facilidade de uso, rapidez, satisfação, segurança e eficiência. (W3C Brasil).
        <br /> </p>
      <p>
        Na Internet, o termo acessibilidade refere-se também a recomendações do W3C, que visam permitir que todos possam ter acesso aos sítios, independente de possuírem alguma deficiência ou não. Essas recomendações passam pelo tamanho e cor da fonte, localização dos espaços clicáveis, facilidade de disponibilização de conteúdo e outras sugestões relativas até aos códigos das páginas (HTML e CSS, entre outros). 

        O Portal do CNMP foi desenvolvido de forma a oferecer seu conteúdo a todas as pessoas, sejam elas com ou sem deficiência. A barra de acessibilidade acima do menu principal contém os botões de variação de fonte (para aumentar, diminuir e voltar as fontes ao tamanho padrão do portal); e o botão de Alto Contraste, que altera o tom das cores de forma a realçar o conteúdo em detrimento do fundo da tela.

        Além disso, há alguns atalhos que podem ser utilizados pelos usuários de modo a facilitar a navegação pelo Portal. Com essas funcionalidades, os usuários do Portal do CNMP podem utilizar o sítio eletrônico com mais facilidade.
      </p>

    <a href="https://www.cnmp.mp.br/portal/acessibilidade#:~:text=Acessibilidade%20pode%20ser%20definida%20como,e%20comunica%C3%A7%C3%A3o%2C%20bem%20como%20de" className={styles.link}>
      <cite>
        Fonte
      </cite>
    </a>

      
      <footer className={styles.footer} aria-label="Rodapé" >
        <Link href="/" className={styles.button}>Voltar para página inicial</Link>
      </footer>

    </article>
  )
}