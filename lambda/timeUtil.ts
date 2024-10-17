export const isSaturday = (day: Date) => {
  const dayOfWeek = day.getDay();
  return dayOfWeek === 6;
};

export const isFirstOrThirdSaturday = (day: Date) => {
  const date = day.getDate();
  const dayOfWeek = day.getDay();
  const isFirstSaturday = date <= 7 && dayOfWeek === 6;
  const isThirdSaturday = date >= 15 && date <= 21 && dayOfWeek === 6;
  return isFirstSaturday || isThirdSaturday;
};

export const isSummer = (day: Date) => {
  const month = day.getMonth() + 1;
  return 7 <= month && month <= 9;
};

export const isWinter = (day: Date) => {
  const month = day.getMonth() + 1;
  return 12 <= month || month <= 3;
};

export const isEvenDay = (day: Date) => {
  const date = day.getDate();
  return date % 2 === 0;
};
