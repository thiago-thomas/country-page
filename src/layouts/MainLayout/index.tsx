import type { ReactNode } from 'react';
import './style.css';

type LayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__logo_container">
          <img src="../../src/assets/Logo.svg" alt="Logo" className="img-logo" />
        </div>
        <img src="../../src/assets/hero-image-sm.jpg" alt="Hero Image" className="img-hero" />
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
}
