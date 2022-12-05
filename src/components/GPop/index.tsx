import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

export interface IProps {
  show: boolean; // 是否显示
  hide: () => void; // 控制隐藏
  position?: 'center' | 'right' | 'left'; // 方向
  top?: string; // Y轴距离, 只有 position 是center或者默认时候才生效
  children;
}

const PopupWrap = styled.div`
  /* min-width: 1rem;
  min-height: 1rem;
  background-color: #fff; */
  position: fixed;
  z-index: 2;

  &.center {
    left: 50%;
    top: ${(props) => (props.top ? props.top : '50%')};
    transform: ${(props) => (props.top ? 'translateX(-50%)' : 'translate(-50%, -50%)')};
  }

  &.left {
    left: 0;
    top: 0;
  }

  &.right {
    right: 0;
    top: 0;
  }
`;

const MaskWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #6262629d;
  backdrop-filter: blur(5px);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export default (props: IProps) => {
  const body = document.querySelector('body');

  // 显示的时候禁止滚动
  useEffect(() => {
    body.style.overflow = props.show ? 'hidden' : 'auto';
  }, [props.show]);

  return ReactDOM.createPortal(
    <>
      {/* 遮罩层 */}
      <MaskWrap
        show={props.show}
        onClick={() => {
          console.log('yinc');
          props.hide();
        }}
      />

      {/* 弹窗内容 */}
      <CSSTransition
        in={props.show}
        timeout={700}
        classNames="fade"
        mountOnEnter
        /* classNames={{
          enter: 'animate__animated',
          enterActive: 'animate__fadeInDown',
          exit: 'animate__animated',
          exitActive: 'animate__fadeOutUp',
      }} */
        onEnter={() => {}}
        onExited={() => {}}
        // appear={props.show}
      >
        <PopupWrap className={`${props.position || 'center'}`} top={props.top}>
          {props.children}
        </PopupWrap>
      </CSSTransition>
    </>,

    body
  );
};
