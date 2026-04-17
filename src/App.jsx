import { useState } from 'react';
import React from 'react';
import Lugar1 from './assets/ImagemLocal1.png';
import Lugar2 from './assets/ImagemLocal2.png';
import retornar from './assets/images.png';
import salvarparadepois from './assets/save.png';
import './App.css'

export default function App() {

  return (
    <>
    <body>
    <main>
      <header>
        <button id="primeiro"><img src={retornar} alt="returno" /></button>
        <button id="segundo"><img src={salvarparadepois} alt="save" /></button>
      </header>
      <section>
      <h1>Eternal Gale</h1>
      <p>Parte das "Depths", a Segunda Camada é uma camada regida pelo vento abaixo das Depths (Scyphozia), que abriga o Deus/Boss Ethiron, juntamente com seu fantoche.</p>
      <p1>Localizações</p1>

        <img id="primeiraimagem" src={Lugar1} alt="A" /> 
        <img id="segundaimagem" src={Lugar2} alt="B" />
        <button id="esquerda"><img src={retornar} alt="" /></button>
        <button id="direita"><img src={retornar} alt="" /></button>
        <p2>The Ethironal Shrine</p2>
        <p3>*buttons de esquerda e direita apenas para exibição, aprendi o comando overflow:hidden procurando na internet*</p3>
      </section>
      <footer>-Vinícius Emanuel Silva Araujo 2ºB TI-</footer>
    </main>
    </body>
    </>
  )
}