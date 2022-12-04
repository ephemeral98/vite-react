import { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import highlight from '@bytemd/plugin-highlight';
import pluginGfm from '@bytemd/plugin-gfm';
import { Editor } from '@bytemd/react';
import zh from '@bytemd/react/node_modules/bytemd/locales/zh_Hans.json';
import 'bytemd/dist/index.css';

const MarkDownEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  > header {
    flex: 0 0 0.6rem;
  }

  > div {
    flex: auto;
    overflow: auto;
  }
`;

export default () => {
  const [value, setValue] = useState('');
  const plugins = useMemo(() => [pluginGfm(), highlight()], []);
  /**
   * 发布
   */
  const doPublish = () => {
    const countNum = document.querySelector('.bytemd-status-left strong');
    console.log('字数：', countNum.textContent);

    console.log('发布');
    console.log(value);
  };

  return (
    <MarkDownEditWrap>
      <Header doPublish={doPublish} />

      <Editor
        locale={zh}
        value={value}
        plugins={plugins}
        uploadImages={async (files) => {
          // upload images here
          return [
            {
              url: 'https://picsum.photos/200/300',
            },
          ];
        }}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </MarkDownEditWrap>
  );
};
