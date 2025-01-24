// Type : never
const createError = (errMessage: string) => {
  throw new Error(errMessage);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") {
    return "string";
  }
  if (typeof value === "number") {
    return "number";
  }
  return createError("Error");
};
