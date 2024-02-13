import Image from 'next/image';
import LogoImg from '../assets/logo.svg';
import GithubImg from '../assets/github-logo.svg';
import InstagramLogo from '../assets/instagram-logo.svg';

import styles from './header.module.css';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContent}>
     <Link href="/">
      <Image loading="eager" src={LogoImg} width={286 / 2} alt="Blog da Rocketseat"/>  
     </Link>

      <nav className={styles.nav} aria-label='Navegação'>
        <a href="https://github.com/diaspd">  
          <Image loading="eager" src={GithubImg} width={35} alt="Acessar Git hub"/>  
        </a> 

        <a href="https://www.instagram.com/dias_pdr/">
          <Image loading="eager" src={InstagramLogo} width={35} alt="Acessar Instagram"/>
        </a>
      </nav>
    </header>
  )
}