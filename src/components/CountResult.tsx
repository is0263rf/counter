import {
  countLines,
  countText,
  countTextWithoutWhiteSpace,
} from "../text-counter";
import { Stack, Box } from "@mui/material";

interface CountResultRowProps {
  label: string;
  result: number;
}

const CountResultRow: React.FC<CountResultRowProps> = ({ label, result }) => {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box width={200}>{label}</Box>
        <Box>{result}</Box>
      </Stack>
    </>
  );
};

interface CountResultProps {
  text: string;
}

export const CountResult: React.FC<CountResultProps> = ({ text }) => {
  return (
    <>
      <Stack direction={"column"} spacing={1}>
        <CountResultRow
          label="文字数"
          result={countText(text)}
        ></CountResultRow>
        <CountResultRow
          label="空白文字を除く文字数"
          result={countTextWithoutWhiteSpace(text)}
        ></CountResultRow>
        <CountResultRow label="行数" result={countLines(text)}></CountResultRow>
      </Stack>
    </>
  );
};
