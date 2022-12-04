// import { themeable } from 'tailwindcss-themeable';
function withOpacity(variableName, opa = 1) {
  /* return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  }; */
  return `rgba(var(${variableName}), ${opa})`;
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class', // or 'media' or 'false'
  theme: {
    screens: {
      sm: '375px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
      pc: '1920px',
    },

    extend: {
      // 颜色
      colors: {
        1: 'var(--color1)',
        gray: {
          1: '#909090', // 置灰
          2: '#909aa4',
        },
      },

      // 宽度
      width: {
        'pc-12': '12rem',
      },

      // 高度
      height: {},

      // 字体
      fontSize: {
        24: '24pw',

        sm: '0.16rem', // 小标题
        md: '0.2rem', // 中标题
        lg: '0.24rem', // 大标题
      },

      // 圆角
      borderRadius: {
        50: '50%',
        ava: '0.12rem', // 头像圆角
        box: '0.1rem', // 普通模块圆角
      },

      // 间距
      spacing: {
        0.1: '0.1rem',
        0.05: '0.05rem',
      },

      // 背景色
      backgroundColor: {
        1: '#b1d5c8',
        2: 'hotpink',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
