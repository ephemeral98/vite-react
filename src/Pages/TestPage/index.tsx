import { useEffect, useRef, useState, useReducer } from 'react';

export default () => {
  const aa = useRef(1);
  const [a, setA] = useState(aa.current);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      // setA(() => a + 1);
      aa.current++;
      setA(aa.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('aaa', a);
      // console.log('aaa', aa.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // return <div>this is TestPage...{aa.current}</div>;
  return <div>this is TestPage...{a}</div>;
};
