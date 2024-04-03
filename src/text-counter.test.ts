import { expect, test } from "vitest";
import { countText, countLines } from "./text-counter";

test("文字数を数える", () => {
  expect(countText("")).toBe(0);
  expect(countText("a")).toBe(1);
  expect(countText("こんにちは")).toBe(5);
  expect(countText("😀")).toBe(1);
});

test("行数を数える", () => {
  expect(countLines("")).toBe(0);
  expect(countLines("あ")).toBe(1);
  expect(countLines("やあ\nこんにちは")).toBe(2);
});
