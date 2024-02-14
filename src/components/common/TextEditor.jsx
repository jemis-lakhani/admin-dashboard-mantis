import React from 'react';
import MUIRichTextEditor from 'mui-rte';

const MyHashTagDecorator = (props) => {
  const hashtagUrl = 'http://myurl/' + props.decoratedText;
  return (
    <a
      href={hashtagUrl}
      style={{
        color: 'green'
      }}
    >
      {props.children}
    </a>
  );
};

const save = (data) => {
  console.log(typeof data, data);
};

const TextEditor = () => {
  return (
    <>
      <MUIRichTextEditor
        onChange={save}
        label="Type something here..."
        decorators={[
          {
            component: MyHashTagDecorator,
            regex: /\#[\w]+/g
          }
        ]}
      />
    </>
  );
};

export default TextEditor;
