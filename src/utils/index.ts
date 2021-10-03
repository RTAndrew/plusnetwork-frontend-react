import { v4 } from 'uuid';

export const firstLetterUpperCase = (value: string) =>
  `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;

/**
 * Formats a number input into a prefixed thousand K
 * @param num
 */
export const kNumberFormatter = (num: string | number) => {
  const cast = Number(num);
  if (isNaN(cast)) return '$$$';

  let result = 0;

  if (Math.abs(cast) > 999) {
    // @ts-ignore
    result = Math.sign(cast) * (Math.abs(cast as number) / 1000).toFixed(0) + 'k';
  } else {
    result = Math.sign(cast) * Math.abs(cast);
  }

  return result;
};

export { v4 as uuid };
