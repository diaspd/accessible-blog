// import { useRef, useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import styles from '../styles/home.module.css';

import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

import faviconUrl from '../../src/assets/logo.svg'

export default function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const modalRef = useRef(null);

  // function handleModalOpen() {
  //   setIsModalOpen(true);
  // }

  // useEffect(() => {
  //   if(isModalOpen) {
  //     modalRef.current?.focus();
  //   }
  // }, [isModalOpen])

  return (
  <>
    <Head>
      <title>
        Web Acessível | Pedro Dias
      </title>

      <link rel="icon" href={faviconUrl} />
    </Head>
    
    <Header />
    
    <main>
      <article className={styles.content}>
      <header>
        <h1> Desenvolvendo uma web acessível !!</h1>

        <h2>
          Protocolos e diretrizes orientam o desenvolvimento e tecnologias accessíveis, mas é preciso olhar para além de tudo isso
        </h2>
      </header>

      <p>
        Acessibilidade se tornou uma tendência no ecossistema tecnológico mundial, diversas empresas passaram a adotar   critérios de desenvolvimento acessível em seus projetos por uma questão prática ou por exigência legais, no entento,<b>ainda faltam recursos e consciência do que de fato é inclusivo na internet para pessoas com deficiências
        </b>
      </p>

      <p>
        Para abordar este tema,<b>é preciso ter uma perspectiva cultural sobre o assunto,</b> não encará-lo apenas na ótica técnica ou prática. Acessibilidade passou a ser vista como um desafio (ou tendência) para o ecossistema tech e não como filosofia natural daquilo que condiz com os princípios básicos da web: <b>acessivel para humanos</b>. Tal afirmação está na <a className={styles.link} href="https://www.w3.org/TR/WCAG21/">W3C</a>
      </p>
      
      <p>
      Na Web, o termo acessibilidade se refere à <b>quanto um Website é acessível para todos os tipos de público, principalmente para que pessoas com deficiência</b> consigam utilizá-lo. Isso significa que, mesmo que o usuário seja portador de qualquer doenças, transtornos ou deficiências de fala, visual, auditiva, cognitiva, neurológica ou física, ele deve ser capaz de entender, navegar e interagir e contribuir com a Web.
      </p>

      <p>
        Mas acessibilidade não se refere <b>exclusivamente a pessoas com deficiências ou necessidades especiais. Acessibilidade é sobre tornar a experiência da Web melhor para todos os usuários</b>, desde a forma como as cores são usadas para tratar o contraste e legibilidade da página; atalhos de teclado; ou até a legenda em um vídeo, que não só ajuda deficientes auditivos a entender sobre o que o vídeo se trata, mas também para quem possui dificuldades temporárias, como, por exemplo, um ambiente barulhento, vídeo em outro idioma, onde existe dificuldade para entender o que é dito, ou até mesmo a utilização dessa funcionalidade por preferência.
      </p>


      <h3>O que é acessibilidade, afinal? </h3>
    </article>
  </main>

    <div className={styles.footer}>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.page}>Saiba Mais</Link>
          
          {/* <button 
            type="button" 
            className={styles.page} 
            onClick={handleModalOpen} 
            aria-controls="modal1" 
          >
            Termos de uso Default
          </button> */}
     
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type="button" className={styles.page}>Termos de uso Radix</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />

              <Dialog.Content className={styles.modal}>
                <Dialog.Title>Termos de uso</Dialog.Title>
                <Dialog.Description>Esses são os termos de uso: </Dialog.Description>

                <Dialog.DialogContent className={styles.modalContent}>
                  <ul>
                    <li style={{ paddingBottom: '16px' }}>
                      O usuário compromete a usar esse  site cheio de acessibilidades.   
                    </li>

                    <li style={{ paddingBottom: '16px' }}>
                      O usuário compromete a estudar  mais sobre acessibilidade.
                    </li>

                    <li style={{ paddingBottom: '16px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing 
                    </li>
                  </ul>
                </Dialog.DialogContent>

                <Dialog.Close asChild>
                  <button className={styles.closeModalButton}>
                    Fechar
                  </button>
                </Dialog.Close>
              </Dialog.Content>

            </Dialog.Portal>
          </Dialog.Root>
      </nav>
    </div>

    <Footer />

    {/* {isModalOpen && (
       <div 
        id="modal1"
        ref={modalRef}
        className={styles.modal} 
        role="dialog" 
        aria-labelledby="modal1Title" 
        tabIndex={1}
        doc-subtitle="modal1Subtitle"
       >
        <h2 id="modal1Title">Termos de uso</h2>
        <h3 id="modal1Subtitle">Esses são os termos de uso: </h3>
        <p>
          <br></br> 
          &#x2022; O usuário compromete a usar esse  <br></br> site cheio de acessibilidades. <br></br> 
          &#x2022; O usuário compromete a estudar  <br></br> mais sobre acessibilidade.
        </p>
        <button className={styles.closeModalButton} onClick={() => setIsModalOpen(false)}>Fechar os termos de uso</button>
       </div>
    )} */}
  </>
  )
}
