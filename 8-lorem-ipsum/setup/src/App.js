import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let textCount = count;
    if(textCount === 0 || textCount < 0) {
      textCount = 1;
    } else if(textCount > data.length) {
      textCount = data.length;
    } 
    const newText = data.slice(0, textCount);
    setText(newText);
  }
  return (
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">paragraphs:</label>
          <input type="number" id="amount" name="amount"
          value={count} onChange={(e) => setCount(+(e.target.value))}/>
          <button className="btn" type="submit">generate</button>
        </form>
        <article className="lorem-text">
          {
            text.map((para, index) => {
              return <p key={index}>{para}</p>
            })
          }
        </article>
      </section>
    )
}

export default App;
