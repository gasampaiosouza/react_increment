import React from 'react';

// import Increment from './Components/Increment/Increment';
import './App.css';

import Minus from './Components/Minus/Minus';
import Plus from './Components/Plus/Plus';
import Number from './Components/Number/Number';

function App() {
  return (
    <section className='incrementContainer'>
      <Minus />
      <Number />
      <Plus />
    </section>
  );

}

export default App;
