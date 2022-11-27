/**
 * 睡眠
 * @param time 睡眠时间
 */
export const sleep = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
