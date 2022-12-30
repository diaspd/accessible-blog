import { useRef, useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import LogoImg from '../assets/logo.svg';
import GithubImg from '../assets/github-logo.svg';
import InstagramLogo from '../assets/instagram-logo.svg';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  useEffect(() => {
    if(isModalOpen) {
      modalRef.current?.focus();
    }
  }, [isModalOpen])

  return (
  <>
    <Head>
      <title>
        Web Acessível | Pedro Dias
      </title>
    </Head>
    <header className={styles.header}>
      <Image loading="eager" src={LogoImg} width={286 / 2} alt="Blog da Rocketseat"/>  

      <nav className={styles.nav}>
        <a href="https://github.com/diaspd">  
          <Image loading="eager" src={GithubImg} width={35} alt="Acessar Git hub"/>  
        </a> 

        <a href="https://www.instagram.com/dias_pdr/">
          <Image loading="eager" src={InstagramLogo} width={35} alt="Acessar Instagram"/>
        </a>
      </nav>
    </header>

  <main>
    <article className={styles.content} >
      <header>
        <h1> Desenvolvendo uma web acessível !! </h1>

        <h2>
          Protocolos e diretrizes orientam o desenvolvimento e tecnologias accessíveis, mas é preciso olhar para além de tudo isso
        </h2>
      </header>

      <p>
        Acessibilidade se tornou uma tendência no ecossistema tecnológico mundial, diversas empresas passaram a adotar   critérios de desenvolvimento acessível em seus projetos por uma questão prática ou por exigência legais, no entento,<strong>ainda faltam recursos e consciência do que de fato é inclusivo na internet para pessoas com deficiências
        </strong>
      </p>

      <p>
        Para abordar este tema,<strong>é preciso ter uma perspectiva cultural sobre o assunto,</strong> não encará-lo apenas na ótica técnica ou prática. Acessibilidade passou a ser vista como um desafio (ou tendência) para o ecossistema tech e não como filosofia natural daquilo que condiz com os princípios básicos da web: <strong>acessivel para humanos</strong>. Tal afirmação está na <a className={styles.link} href="https://www.w3.org/TR/WCAG21/">W3C</a>
      </p>

      <h3>O que é acessibilidade, afinal? </h3>
    </article>
  </main>

    <footer className={styles.footer}>
        <nav className={styles.nav} aria-label="Rodapé" >
          <Link href="/About" className={styles.page}>Saiba Mais</Link>
          
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
                <Dialog.Close asChild>
                  <button className={styles.closeModalButton}>
                    Fechar
                  </button>
                </Dialog.Close>
              </Dialog.Content>

            </Dialog.Portal>
          </Dialog.Root>
        </nav>
    </footer>

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
