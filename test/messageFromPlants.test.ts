import { messageFromPlants } from "../lambda/messageFromPlants";

test("どの植物からもメッセージが返されない時、植物がお水を欲しがっていないメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-01-01"))).toContain(
    "今日はお水をあげなくても大丈夫そうです🌿"
  );
});

test("11月の毎週土曜日にはアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2024-11-02"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-09"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-16"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-23"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("11月の平日、日曜日にはアロエからのメッセージが返されない", () => {
  expect(messageFromPlants(new Date("2024-11-01"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-03"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-04"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-10"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-17"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-24"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-11-25"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("12月の第一土曜日、第三土曜日はアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2024-12-07"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-12-21"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("12月の第二土曜日、第四土曜日はアロエからのメッセージが返されない", () => {
  expect(messageFromPlants(new Date("2024-12-14"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2024-12-28"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("3月の第一土曜日、第三土曜日はアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-03-01"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-03-15"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("3月の第二土曜日、第四土曜日はアロエからのメッセージが返されない", () => {
  expect(messageFromPlants(new Date("2025-03-08"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-03-22"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("4月の毎週土曜日にはアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-04-05"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-04-12"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-04-19"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-04-26"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("6月の毎週土曜日にはアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-06-07"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-06-14"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-06-21"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-06-28"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("7月の偶数日にはアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-07-02"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-07-04"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-07-06"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-07-08"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("7月の奇数日にはアロエからのメッセージが返されない", () => {
  expect(messageFromPlants(new Date("2025-07-01"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-07-03"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-07-05"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-07-07"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("9月の偶数日にはアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-09-02"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-09-04"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-09-06"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-09-08"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("9月の奇数日にはアロエからのメッセージが返されない", () => {
  expect(messageFromPlants(new Date("2025-09-01"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-09-03"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-09-05"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-09-07"))).not.toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

test("10月の毎週土曜日にはアロエからのメッセージが返される", () => {
  expect(messageFromPlants(new Date("2025-10-04"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-10-11"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-10-18"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
  expect(messageFromPlants(new Date("2025-10-25"))).toContain(
    "アロエ < お水欲しいかも🪴"
  );
});

// test("10月の毎週土曜日にはガジュマルからのメッセージが返される", () => {
//   expect(messageFromPlants(new Date("2025-10-04"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-11"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-18"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-25"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("10月の平日、日曜日にはガジュマルからのメッセージが返されない", () => {
//   expect(messageFromPlants(new Date("2025-10-01"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-02"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-03"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-06"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-13"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-20"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-10-27"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("11月の毎週土曜日にはガジュマルからのメッセージが返される", () => {
//   expect(messageFromPlants(new Date("2024-11-02"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-09"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-16"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-23"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("11月の平日、日曜日にはガジュマルからのメッセージが返されない", () => {
//   expect(messageFromPlants(new Date("2024-11-01"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-03"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-04"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-10"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-17"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-24"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-11-25"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("12月の第一土曜日、第三土曜日はガジュマルからのメッセージが返される", () => {
//   expect(messageFromPlants(new Date("2024-12-07"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-12-21"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("12月の第二土曜日、第四土曜日はガジュマルからのメッセージが返されない", () => {
//   expect(messageFromPlants(new Date("2024-12-14"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2024-12-28"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("3月の第一土曜日、第三土曜日はガジュマルからのメッセージが返される", () => {
//   expect(messageFromPlants(new Date("2025-03-01"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-03-15"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("3月の第二土曜日、第四土曜日はガジュマルからのメッセージが返されない", () => {
//   expect(messageFromPlants(new Date("2025-03-08"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-03-22"))).not.toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });

// test("4月の毎週土曜日にはガジュマルからのメッセージが返される", () => {
//   expect(messageFromPlants(new Date("2025-04-05"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-04-12"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-04-19"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
//   expect(messageFromPlants(new Date("2025-04-26"))).toContain(
//     "ガジュマル < お水欲しいかも🌱"
//   );
// });
