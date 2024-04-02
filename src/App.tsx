import { useState, ChangeEvent } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClickButton = () => {
    setText("");
  };

  const countText = (str: string): number => {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    const segments = segmenter.segment(str);
    const strLength = [...segments].length;

    return strLength;
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
    </>
  );
}

export default App;
