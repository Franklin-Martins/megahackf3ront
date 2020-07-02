import React from 'react'
import './style.css'

export default function Home(){
    return (
        <div id='home'>
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
        </div>
    );
}