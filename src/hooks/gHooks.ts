import { useCallback, useEffect, useState } from 'react';

/**
 * 类似vue的nextTick，页面渲染前的临门一脚
 * @param callBack
 */
export const useNextTick = (callBack: () => void, deps?) => {
  useEffect(() => {
    setTimeout(() => {
      callBack();
    }, 0);
  }, [deps]);
};

/**
 * 获取同步值的函数
 * @param callback 回调函数
 */
export const useSyncCallback = (callback: () => void) => {
  const [proxyState, setProxyState] = useState({ current: false });

  const Func = useCallback(() => {
    setProxyState({ current: true });
  }, [proxyState]);

  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false });
  }, [proxyState]);

  useEffect(() => {
    proxyState.current && callback();
  });

  return Func;
};
