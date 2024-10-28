import React from 'react'

import { useEffect } from 'react'

const ContGraph = () => {

  useEffect(() => {
    const squares = document.querySelector('.squares');
    squares.innerHTML = ''; // clear squares kasi nag bebeyond 365 siya dunno why
    for (var i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);
      squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
    }
  }, []);


  return (
    <div className="graph">
      <ul className="months">
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
        <li>Jun</li>
        <li>Jul</li>
        <li>Aug</li>
        <li>Sep</li>
        <li>Oct</li>
        <li>Nov</li>
        <li>Dec</li>
      </ul>
      <ul className="days">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul className="squares">
        {/* tba */}
      </ul>
    </div>
  )
}

export default ContGraph