import type { ReactNode } from 'react';
import './style.css';
import Logo from '../../assets/Logo.svg';
import HeroImgSm from '../../assets/hero-image-sm.jpg';
import HeroImg from '../../assets/hero-image.jpg';


type LayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__logo_container">
          <img src={Logo} alt="Logo" className="img-logo" />
        </div>
        <img src={HeroImgSm} srcSet={`${HeroImgSm} 600w, ${HeroImg} 1024w`} alt="Hero Image" className="img-hero" />
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
}
