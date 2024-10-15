const isSaturday = (day: Date) => {
  const dayOfWeek = day.getDay();
  return dayOfWeek === 6;
};

const isFirstOrThirdSaturday = (day: Date) => {
  const date = day.getDate();
  const dayOfWeek = day.getDay();
  const isFirstSaturday = date <= 7 && dayOfWeek === 6;
  const isThirdSaturday = date >= 15 && date <= 21 && dayOfWeek === 6;
  return isFirstSaturday || isThirdSaturday;
};

const isSummer = (day: Date) => {
  const month = day.getMonth() + 1;
  return 7 <= month && month <= 9;
};

const isWinter = (day: Date) => {
  const month = day.getMonth() + 1;
  return 12 <= month || month <= 3;
};

const isEvenDay = (day: Date) => {
  const date = day.getDate();
  return date % 2 === 0;
};

const messageFromGajumaru = (day: Date) => {
  const text = "ガジュマル < お水欲しいかも🌱";
  // 冬季は第一土曜日と第三土曜日に送信、それ以外は土曜日に送信
  if (isWinter(day)) {
    if (isFirstOrThirdSaturday(day)) {
      return text;
    } else {
      return "";
    }
  }

  return isSaturday(day) ? text : "";
};

const messageFromAloe = (day: Date) => {
  const text = "アロエ < お水欲しいかも🪴";
  // 夏季は偶数日に送信、冬季は第一土曜日と第三土曜日に送信、それ以外は土曜日に送信
  if (isSummer(day)) {
    if (isEvenDay(day)) {
      return text;
    } else {
      return "";
    }
  }

  if (isWinter(day)) {
    if (isFirstOrThirdSaturday(day)) {
      return text;
    } else {
      return "";
    }
  }

  return isSaturday(day) ? text : "";
};

export const messageFromPlants = (day: Date) => {
  const messages = [messageFromGajumaru(day), messageFromAloe(day)];
  if (messages.every((message) => message === "")) {
    return "今日はお水をあげなくても大丈夫そうです🌿";
  } else {
    return ["植物がお水を欲しがってそうです🌱", ...messages].join("\n");
  }
};
