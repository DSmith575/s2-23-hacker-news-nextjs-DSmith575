export const convertTime = (timeStamp) => {
  const date = new Date(timeStamp);
  const todayDate = new Date(timeStamp * 1000);
  const postedDated = new Date(todayDate - date).toLocaleDateString();
  return postedDated;
};
