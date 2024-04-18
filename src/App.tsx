import { useState, ChangeEvent } from "react";
import {
  countText,
  countLines,
  countTextWithoutWhiteSpace,
} from "./text-counter";
import { Button, Stack, TextField, Box } from "@mui/material";

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
        <Stack direction={"column"} spacing={1}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box width={200}>文字数</Box>
            <Box>{countText(text)}</Box>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box width={200}>空白文字を除く文字数</Box>
            <Box>{countTextWithoutWhiteSpace(text)}</Box>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box width={200}>行数</Box>
            <Box>{countLines(text)}</Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
