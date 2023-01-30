import React from 'react';
import './Main.css';
import background from '../../background.png';
import Animal from '../Animal/Animal.js';
import { animals } from '../../data.js';

export default function Main() {
  return (
    <main style={{ background: `url(${background})` }}>
      {animals.map((animal) => (
        <Animal key={animal.name} animal={animal} />
      ))}
    </main>
  );
}
