import dayjs from "dayjs";

export const getRemainingTime = (timestamp) => {
  const now = dayjs();

  if (timestamp.isBefore(now)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(now, timestamp),
    minutes: getRemainingMinutes(now, timestamp),
  };
};

const getRemainingSeconds = (now, timestamp) => {
  const seconds = timestamp.diff(now, "seconds") % 60;
  return padWithZeros(seconds, 2);
};

const getRemainingMinutes = (now, timestamp) => {
  const minutes = timestamp.diff(now, "minutes") % 60;
  return padWithZeros(minutes, 2);
};

const padWithZeros = (number, minLength) => {
  const numberAsText = number.toString();

  if (numberAsText.length >= minLength) return numberAsText;
  return "0".repeat(minLength - numberAsText.length) + numberAsText;
};
