import styled from 'styled-components';
const PublishPopWrap = styled.div`
  background-color: #fff;
  padding: 0.2rem;
  border-radius: 0.1rem;
  width: 5rem;

  > header.publish-title {
    font-size: 0.24rem;
    margin-bottom: 0.2rem;
    padding-bottom: 0.1rem;
    border-bottom: solid 1px #e8e9ed;
  }
`;

const InpWrap = styled.div`
  word-break: break-all;
  height: 72%;
  background-color: pink;
  overflow-y: auto;
`

export default () => {
  return (
    <PublishPopWrap>
      <header className="publish-title">发布文章</header>
      {/* 添加标签 */}
      <section className="flex items-center">
        <div className="mr-0.5">添加标签:</div>
        <div className="bg-blue-300 p-[0.03rem] flex justify-between items-center w-[2rem]">
          <input type="text" placeholder="请输入或选择标签" className='h-[0.3rem] flex-auto' />
          <i className="iconfont icon-arrow ml-0.5"></i>
        </div>
      </section>
      {/* 文章封面 */}
      <section className="flex items-start mt-1">
        <div className="mr-0.5">文章封面:</div>
        <div className="bg-[#fafaf9] text-[0.18rem] flex justify-center items-center flex-col px-2 py-1">
          <div>+</div>
          <div>上传封面</div>
        </div>
      </section>
      {/* 编辑摘要 */}
      <section className="flex items-start mt-1 relative">
        <div className="mr-0.5 flex-shrink-0">编辑摘要:</div>
        <div className="flex-auto h-[1.5rem] bg-1">
          <InpWrap contentEditable></InpWrap>
          <div className="absolute right-[0.1rem] bottom-[0.1rem]">99/100</div>
        </div>
      </section>
    </PublishPopWrap>
  );
};
