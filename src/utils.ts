export const isNumber = (str: string) =>
  !isNaN(+str) && !isNaN(parseFloat(str));

export const rounded = (num: number) => String(+num.toFixed(2));
