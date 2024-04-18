import { useState, ChangeEvent } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { CountResult } from "./components/CountResult";

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
      <Stack spacing={2} alignItems={"center"} width={300} m={"auto"}>
        <TextField
          variant="outlined"
          multiline={true}
          minRows={3}
          onChange={handleChangeTextArea}
          value={text}
          placeholder="テキストを入力してください"
          fullWidth={true}
        ></TextField>
        <Button variant="contained" onClick={handleClickButton}>
          リセット
        </Button>
        <CountResult text={text}></CountResult>
      </Stack>
    </>
  );
}

export default App;
