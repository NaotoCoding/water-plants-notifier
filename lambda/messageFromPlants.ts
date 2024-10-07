const isTodaySaturday = (day: Date) => {
  const dayOfWeek = day.getDay();
  return dayOfWeek === 6;
};

const isTodayFirstOrThirdSaturday = (day: Date) => {
  const date = day.getDate();
  const dayOfWeek = day.getDay();
  const isFirstSaturday = date <= 7 && dayOfWeek === 6;
  const isThirdSaturday = date >= 15 && date <= 21 && dayOfWeek === 6;
  return isFirstSaturday || isThirdSaturday;
};

const isTodaySummer = (day: Date) => {
  const month = day.getMonth() + 1;
  return 7 <= month && month <= 9;
};

const isTodayWinter = (day: Date) => {
  const month = day.getMonth() + 1;
  return 12 <= month || month <= 3;
};

const isTodayEvenDay = (day: Date) => {
  const date = day.getDate();
  return date % 2 === 0;
};

const messageFromGajumaru = (day: Date) => {
  const text = "ガジュマル < お水欲しいかも🌱";
  // 冬季は第一土曜日と第三土曜日に送信、それ以外は土曜日に送信
  if (isTodayWinter(day)) {
    if (isTodayFirstOrThirdSaturday(day)) {
      return text;
    } else {
      return "";
    }
  }

  return isTodaySaturday(day) ? text : "";
};

const messageFromAloe = (day: Date) => {
  const text = "アロエ < お水欲しいかも🪴";
  // 夏季は偶数日に送信、冬季は第一土曜日と第三土曜日に送信、それ以外は土曜日に送信
  if (isTodaySummer(day)) {
    if (isTodayEvenDay(day)) {
      return text;
    } else {
      return "";
    }
  }

  if (isTodayWinter(day)) {
    if (isTodayFirstOrThirdSaturday(day)) {
      return text;
    } else {
      return "";
    }
  }

  return isTodaySaturday(day) ? text : "";
};

export const messageFromPlants = (day: Date) => {
  const messages = [messageFromGajumaru(day), messageFromAloe(day)];
  if (messages.every((message) => message === "")) {
    return "今日はお水をあげなくても大丈夫そうです🌿";
  } else {
    return ["植物がお水を欲しがってそうです🌱", ...messages].join("\n");
  }
};
