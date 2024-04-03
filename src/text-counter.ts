/**
 * 文字列の文字数を数える
 * @param str 文字列
 * @returns 文字列の文字数(書記素の数)
 */
export const countText = (str: string): number => {
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
  const segments = segmenter.segment(str);
  const strLength = [...segments].length;

  return strLength;
};

/**
 * 文字列の行数を数える
 * @param str 文字列
 * @returns 行数(0文字の場合は0行)
 */
export const countLines = (str: string): number => {
  if (countText(str) === 0) {
    return 0;
  }

  const result = str.split("\n").length;
  return result;
};

/**
 * 空白文字を除外して文字列の文字数を数える
 * @param str 文字列
 * @returns 文字数
 */
export const countTextWithoutWhiteSpace = (str: string): number => {
  const str2 = str.replace(/\s/g, "");
  const result = countText(str2);

  return result;
};
