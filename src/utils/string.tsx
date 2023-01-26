export const capitalize = (text: string): string => {
  return text
    .split(" ")
    .map((item) => item.charAt(0).toLocaleUpperCase() + item.substring(1))
    .join(" ")
    .toString();
};
