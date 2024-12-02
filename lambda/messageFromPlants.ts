import {
  isEvenDay,
  isFirstOrThirdSaturday,
  isSaturday,
  isSummer,
  isWinter,
} from "./timeUtil";

// const messageFromGajumaru = (day: Date) => {
//   const text = "ガジュマル < お水欲しいかも🌱";
//   // 冬季は第一土曜日と第三土曜日に送信、それ以外は土曜日に送信
//   if (isWinter(day)) {
//     if (isFirstOrThirdSaturday(day)) {
//       return text;
//     } else {
//       return "";
//     }
//   }

//   return isSaturday(day) ? text : "";
// };

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
  const message = messageFromAloe(day);
  if (message === "") {
    return "今日はお水をあげなくても大丈夫そうです🌿";
  } else {
    return `植物がお水を欲しがってそうです🌱\n${message}`;
  }
};
