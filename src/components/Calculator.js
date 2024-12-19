import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [ans, setAns] = useState(0);

  const calval = (val) => {
    if (ans === 0) {
      setAns(val.target.value);
    } else {
      setAns(ans + val.target.value);
    }
  }

  const calop = (op) => {
    setAns(ans + op.target.value);
  }

  const caldel = () => {
    setAns(0);
  }

  const calans = () => {
    try {
      const result = evaluate(ans);
      setAns(result.toString());
    } catch (error) {
      setAns("Error");
    }
  }

  return (
    <div className='card rounded bg-secondary mx-auto mt-5 w-25 '>
      <h5 className='text-white text-center form-title mt-2'>Simple Calculator</h5>
      <div className='d-flex flex-wrap justify-content-between mx-2'>
        <input type='text' className="form-control text-secondary" value={ans} id='answer'></input>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calval} value={'7'} style={{ width: '23.5%' }}>7</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calval} value={'8'} style={{ width: '23.5%' }}>8</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calval} value={'9'} style={{ width: '23.5%' }}>9</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calop} value={'+'} style={{ width: '23.5%' }}>+</button>
        <button type='button' className='btn bg-white text-secondary' onClick={calval} value={'4'} style={{ width: '23.5%' }}>4</button>
        <button type='button' className='btn bg-white text-secondary' onClick={calval} value={'5'} style={{ width: '23.5%' }} >5</button>
        <button type='button' className='btn bg-white text-secondary' onClick={calval} value={'6'} style={{ width: '23.5%' }}>6</button>
        <button type='button' className='btn bg-white text-secondary' onClick={calop} value={'-'} style={{ width: '23.5%' }}>-</button>
        <button type='button' className='btn bg-white text-secondary mt-2' onClick={calval} value={'1'} style={{ width: '23.5%' }}>1</button>
        <button type='button' className='btn bg-white text-secondary mt-2' onClick={calval} value={'2'} style={{ width: '23.5%' }} >2</button>
        <button type='button' className='btn bg-white text-secondary mt-2' onClick={calval} value={'3'} style={{ width: '23.5%' }}>3</button>
        <button type='button' className='btn bg-white text-secondary mt-2' onClick={calop} value={'*'} style={{ width: '23.5%' }}>*</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={caldel} value={'C'} style={{ width: '23.5%' }} >C</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calval} value={'0'} style={{ width: '23.5%' }}>0</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calans} value={'='} style={{ width: '23.5%' }}>=</button>
        <button type='button' className='btn bg-white text-secondary my-2' onClick={calop} value={'/'} style={{ width: '23.5%' }}>/</button>
      </div>
    </div>
  )
}

export default Calculator;