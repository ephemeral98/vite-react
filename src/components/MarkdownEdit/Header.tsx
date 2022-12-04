import styled from 'styled-components';
import { TEMP_IMG } from '@/utils/globalConst';
import ImgCenter from '../ImgCenter';

const WriteTitleWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: plum;

  .title-inp {
    background-color: pink;
    flex: auto;
    height: 100%;
    padding: 0 0.2rem;
    font-size: 0.28rem;
  }

  .tools {
    display: flex;
    padding: 0 0.2rem;

    > button {
      padding: 0.05rem 0.1rem;
      background-color: skyblue;
      margin-left: 0.2rem;
    }
  }
`;

export default (props) => (
  <WriteTitleWrap>
    <input type="text" className="title-inp" placeholder="输入文章标题..." />
    <div className="tools">
      <div className="flex-center">保存成功</div>
      <button>草稿箱</button>
      <button onClick={props.doPublish}>发布</button>
      <button className="mr-[0.2rem]">=</button>
      <ImgCenter w="0.4rem" h="0.4rem" img={TEMP_IMG} round="0.12rem" />
    </div>
  </WriteTitleWrap>
);
