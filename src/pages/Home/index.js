import React from 'react'
import './style.css'

export default function Home(){
    return (
        <div id='home'>
{/*============================================================ HEADER ============================================================*/}
            <header>
                <div class="container">
                    <div class="logo"><a href="#"><img src="assets/logomarca.svg" alt="logomarca"/></a></div>
                    <div class="menu">
                        <nav>
                            <ul>
                                <li><a href="#">Início</a></li>
                                <li><a href="#">Prepare a sua escola</a></li>
                                <li><a href="#">Contato</a></li>
                                <li><div class="button"><a href="#">Quero na minha escola</a></div></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
{/*============================================================ BANNER ============================================================*/}
            <section id="banner">
                <div class="container">
                    <div class="banner-content column">
                        <h1>A melhor forma de leitura para os seus alunos começa hoje.</h1>
                        <div class="bar"></div>
                        <p>
                            Com a Semente o incentivo à leitura começa de uma maneira 
                            intuitiva e personalizada. Pensado para todos os gostos e 
                            idades, de uma maneira simples, acessível e intuitiva. 
                            Conheça a semente!
                        </p>
                        <div class="banner-options">
                            <div class="banner-options--item"><img src="assets/apple.svg" alt="Baixe na Apple Store"/></div>
                            <div class="banner-options--item"><img src="assets/playstore.svg" alt="Baixe na Play Store"/></div>
                        </div>
                    </div>
                    <div class="banner-thumbnail"><img src="assets/banner-thumbnail.svg" alt="O semente está disponivel em todas as plataformas"/></div>
                </div>
                <div class="mouse"><img src="assets/mouse.svg" alt="Deslize para baixo!"/></div>
            </section>
        </div>
    );
}