import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(true)
  const [btn3, setBtn3] = useState(true)
  const [btn4, setBtn4] = useState(true)
  const [btn5, setBtn5] = useState(true)
  const [btn6, setBtn6] = useState(true)
  const [btn7, setBtn7] = useState(true)
  const [btn8, setBtn8] = useState(true)
  const [btn9, setBtn9] = useState(true)
  const [btn10, setBtn10] = useState(true)

  const handleBtn1 = () => {
    setBtn1(!btn1)
  }

  const handleBtn2 = () => {
    setBtn2(!btn2)
  }

  const handleBtn3 = () => {
    setBtn3(!btn3)
  }

  const handleBtn4 = () => {
    setBtn4(!btn4)
  }

  const handleBtn5 = () => {
    setBtn5(!btn5)
  }

  const handleBtn6 = () => {
    setBtn6(!btn6)
  }

  const handleBtn7 = () => {
    setBtn7(!btn7)
  }

  const handleBtn8 = () => {
    setBtn8(!btn8)
  }

  const handleBtn9 = () => {
    setBtn9(!btn9)
  }

  const handleBtn10 = () => {
    setBtn10(!btn10)
  }


  return (
    <div className="main">

      {
        btn1 ? <button className="grp1 btn1" onClick={handleBtn1}><p>button 1</p></button>
          : <button className="grp1 btn1 focused" onClick={handleBtn1}><p>button 1</p></button>
      }

      {
        btn2 ? <button className="grp1 btn2" onClick={handleBtn2}><p>button 1</p></button>
          : <button className="grp1 btn2 focused" onClick={handleBtn2}><p>button 1</p></button>
      }

      {
        btn3 ? <button className="grp1 btn3" onClick={handleBtn3}><p>button 1</p></button>
          : <button className="grp1 btn3 focused" onClick={handleBtn3}><p>button 1</p></button>
      }

      {
        btn4 ? <button className="grp1 btn4" onClick={handleBtn4}><p>button 1</p></button>
          : <button className="grp1 btn4 focused" onClick={handleBtn4}><p>button 1</p></button>
      }

      {
        btn5 ? <button className="grp2 btn5" onClick={handleBtn5}><p>button 1</p></button>
          : <button className="grp2 btn5 focused" onClick={handleBtn5}><p>button 1</p></button>
      }

      {
        btn6 ? <button className="grp2 btn6" onClick={handleBtn6}><p>button 1</p></button>
          : <button className="grp2 btn6 focused" onClick={handleBtn6}><p>button 1</p></button>
      }

      {
        btn7 ? <button className="grp2 btn7" onClick={handleBtn7}><p>button 1</p></button>
          : <button className="grp2 btn7 focused" onClick={handleBtn7}><p>button 1</p></button>
      }

      {
        btn8 ? <button className="grp3 btn8" onClick={handleBtn8}><p>button 1</p></button>
          : <button className="grp3 btn8 focused" onClick={handleBtn8}><p>button 1</p></button>
      }

      {
        btn9 ? <button className="grp3 btn9" onClick={handleBtn9}><p>button 1</p></button>
          : <button className="grp3 btn9 focused" onClick={handleBtn9}><p>button 1</p></button>
      }

      {
        btn10 ? <button className="grp3 btn10" onClick={handleBtn10}><p>button 1</p></button>
          : <button className="grp3 btn10 focused" onClick={handleBtn10}><p>button 1</p></button>
      }
    </div>
  );
}

export default App;
