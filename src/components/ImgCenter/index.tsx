// 剪切中心的<img>
import styled from 'styled-components';

const ImgCenterWrap = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  border-radius: ${(props) => (props.round ? props.round : '0%')};

  > .img-center-content {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${(props) => (props.round ? props.round : '0%')};
  }
`;

interface IProps {
  img: string; // 图片
  w: string; // 宽度
  h: string; // 高度
  round?: string; // 带圆角
}

export default (props: IProps) => {
  return (
    <ImgCenterWrap w={props.w} h={props.h} round={props.round}>
      <img src={props.img} alt="" className="img-center-content" />
    </ImgCenterWrap>
  );
};
