"use client";
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Image from 'next/image';
import WelcomeComponent from './components/welcome/welcome';
import SocialMediaTitle from './components/social/social-home';
import './components/welcome/welcome.css';
import './page.css';
import Info from './components/info/info';
import Recarga from './components/recarga/recarga';
import CakesPage from './components/carousel/cakes';
import Eventos from './components/eventos/eventos';
import MenuPage from './components/carousel/menu';
import Gallery from './components/gallery/gallery.js';


export default function HomePage() {
  useEffect(() => {
    
    ReactGA.initialize('G-1L01SLY277');

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main >
    
      <div className="banner">
        <Image src="/banner-home.png" alt="Banner Sucursales" width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }}/>
      </div>
      <WelcomeComponent className="welcome-container" />
      <Info />
      <SocialMediaTitle />
      <Gallery/>
      <Recarga />
      <CakesPage />
      <Eventos />
      <MenuPage />
    </main>
  )
}

