export const convertTime = (timeStamp) => {
  return new Date(timeStamp * 1000).toISOString().slice(0, 10);
};
