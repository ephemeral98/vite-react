import { useEffect, useReducer, useRef, useState } from 'react';

export default () => {
  const data = 1;

  const reducer2 = (state, payload) => {
    console.log('这个state可以拿到旧值，相当于store', state);
    // 返回一个新的store，将就store覆盖
    return payload;
  };

  const [res, dispatch] = useReducer(reducer2, data);

  const aa = useRef(1);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    aa.current = 2;
    forceUpdate();
    console.log('setA之后', aa.current); // 2
  }, []);

  return (
    <div>
      <div>视图层中的a:{aa.current}</div>

      <div>res:{res}</div>

      <button
        onClick={() => {
          dispatch(23);
        }}
      >
        update
      </button>
    </div>
  );
};
