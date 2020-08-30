import React from 'react'
import './slideOne.css'
import PulseDot from '../pulseDot/pulseDot'

export default () => (
  <section className="slide slide--one" id="slide-1">
    <div className="slide__wrapper slide__wrapper--one">
      <h2 className="slide__title">Всегда ли цели терапии СД2 на поверхности?</h2>
      <div className="slide__content">
        <ul className="purposes-list">
          <li className="purposes-list__item purposes-list__item--hba1c">
            <PulseDot />
            <span>Цель по HbA1c</span>
          </li>
          <li className="purposes-list__item purposes-list__item--hipo">
            <PulseDot />
            <span>Гипогликемия</span>
          </li>
          <li className="purposes-list__item purposes-list__item--sequela">
            <PulseDot />
            <span>Осложнения СД</span>
          </li>
          <li className="purposes-list__item purposes-list__item--risk">
            <PulseDot />
            <span>СС риски</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
)
