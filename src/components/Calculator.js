import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <section id="calculator-container">
        <div id="calculator">
          <input type="text" id="input-result" value="0" />

          <div id="btn-container">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn oprand">÷</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn oprand">x</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn oprand">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn oprand">+</button>
            <button type="button" className="btn">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn oprand">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
