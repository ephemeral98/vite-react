// 初始化 rem
export default () => {
  const docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 375) {
        // 如果超过手机设计稿，则按照 pc 固定基本 fontSize
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
      }
    };
  recalc();
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
};
