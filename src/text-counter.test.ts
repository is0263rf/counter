import { expect, test } from "vitest";
import {
  countText,
  countLines,
  countTextWithoutWhiteSpace,
} from "./text-counter";

test("文字数を数える", () => {
  expect(countText("")).toBe(0);
  expect(countText("hello")).toBe(5);
  expect(countText("こんにちは")).toBe(5);
  expect(countText("😀")).toBe(1);
});

test("行数を数える", () => {
  expect(countLines("")).toBe(0);
  expect(countLines("こんにちは")).toBe(1);
  expect(countLines("やあ\nこんにちは")).toBe(2);
});

test("空白文字を除いた文字数を数える", () => {
  expect(countTextWithoutWhiteSpace("こんにちは")).toBe(5);
  // 半角スペース
  expect(countTextWithoutWhiteSpace("こんにちは こんにちは")).toBe(10);
  expect(countTextWithoutWhiteSpace("こんにちは こんにちは こんにちは")).toBe(
    15,
  );
  // 全角スペース
  expect(countTextWithoutWhiteSpace("こんにちは　こんにちは")).toBe(10);
  expect(countTextWithoutWhiteSpace("こんにちは　こんにちは　こんにちは")).toBe(
    15,
  );
  // 改行
  expect(countTextWithoutWhiteSpace("こんにちは\nこんにちは")).toBe(10);
  expect(countTextWithoutWhiteSpace("こんにちは\r\nこんにちは")).toBe(10);
});
