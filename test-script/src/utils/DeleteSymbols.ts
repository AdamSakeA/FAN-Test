export const deleteSymbol = (text?: string) => {
  if (text?.includes("_")) {
    return text?.charAt(0).toUpperCase() + text?.slice(1).split("_").join(" ");
  }
  if (text) {
    return text?.charAt(0).toUpperCase() + text?.slice(1).split("-").join(" ");
  }
};
