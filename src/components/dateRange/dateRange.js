import React from 'react'
import './dateRange.css'

export default () => (
  <div className="date-range">
    <input className="date-range__input" id="date-range-input" type="range" min="1" max="98" />
    <div className="date-range__text-block">
      <p>1988</p>
      <p>2009</p>
      <p>2016</p>
    </div>
  </div>
)
