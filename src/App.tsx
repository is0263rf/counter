import { useState, ChangeEvent } from "react";
import {
  countText,
  countLines,
  countTextWithoutWhiteSpace,
} from "./text-counter";

function App() {
  const [text, setText] = useState("");

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClickButton = () => {
    setText("");
  };

  return (
    <>
      <textarea
        placeholder="テキストを入力してください"
        onChange={handleChangeTextArea}
        value={text}
      ></textarea>
      <button onClick={handleClickButton}>リセット</button>
      <div>文字数:{countText(text)}</div>
      <div>空白文字を除く文字数:{countTextWithoutWhiteSpace(text)}</div>
      <div>行数:{countLines(text)}</div>
    </>
  );
}

export default App;
