import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterHook from './CounterHook';
import CounterReducer from './CounterReducer';
import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import Info from './Info';
import Info2 from './Info2';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  // const [visible, setVisible] = useState(false);
  return (
    // <MyComponent name='React' favoriteNumber={1}>
    //   리액트
    // </MyComponent>
    // <Counter />
    // <Say />
    // <EventPractice />
    // <EventPractice2 />
    // <CounterHook />
    // <div>
    //   <button
    //     onClick={() => {
    //       setVisible(!visible);
    //     }}>
    //     {visible ? '숨기기' : '보이기'}
    //   </button>
    //   <hr />
    //   {visible && <Info />}
    // </div>
    // <CounterReducer />
    <Info2 />
  );
};

export default App;
