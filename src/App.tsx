import { useState, useRef, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { sleep } from './utils/tools';
import { useSyncCallback } from './hooks/gHooks';
import TestPage from '@/Pages/TestPage';

function App() {
  const reducer = (state, action) => {
    return {
      ...state,
      ...action,
    };
  };

  const [data2, dispatch2] = useReducer(reducer, { a: 0 });
  const doThree = () => {
    console.log('data2...', data2);
    dispatch2({ a: data2.a + 1 });
    console.log('data22...', data2);
  };

  const [count, setCount] = useState(0);
  const [load, setLoad] = useState<boolean>(false);
  const loading = useRef(false);
  const [testImg, setImg] = useState({
    img: require('@img/holder.png'),
  });

  const [data, setData] = useState<any>({
    a: true,
  });
  const [loadA, setLoadA] = useState(false);
  const [loadB, setLoadB] = useState(false);

  async function doClick(key): Promise<void> {
    setData((v) => ({
      ...v,
      a: false,
    }));
    console.log('load....', data.a);
    // loading.current = true;
    // setData({ ...data, [key]: true });
    // await sleep(3000);
    // doOther();
    // loading.current = false;

    // setData({ ...data, [key]: false });
  }

  const doClick2 = useSyncCallback(() => {
    console.log('sync..');
    setLoad(true);
    // setData({ ...data, [key]: true });
    // await sleep(3000);
    // doOther();
    // console.log('load...', load);
    console.log('load...', load);

    doOther2();
  });

  async function doOther() {
    console.log('load...', load);
    // console.log('loading2...', loading.current);
  }

  const doOther2 = useSyncCallback(() => {
    console.log('load...', load);
    console.log('load...', load);
    console.log('load...', load);
    console.log('load...', load);
  });

  return (
    <div className="App">
      <TestPage />

      <div>{loading.current ? 'loading...' : 'loading ... dong...'}</div>
      <div>{data.a ? 'a加载中' : 'a加载完'}</div>
      <div>{data.b ? 'b加载中' : 'b加载完'}</div>
      <button
        onClick={() => {
          // doClick('a');
          doThree();
        }}
      >
        click AAA
      </button>
      <button
        onClick={() => {
          doClick2();
        }}
      >
        click BBB
      </button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
