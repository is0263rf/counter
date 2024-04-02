import { useState, ChangeEvent } from "react";

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
      <div>文字数:{text.length}</div>
      <></>
    </>
  );
}

export default App;
