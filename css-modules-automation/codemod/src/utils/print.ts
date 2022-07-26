const SHOULD_LOGGING = true;

export const printWithCondition = (shouldLogging: boolean, msg: string, ...args: any[]) => {
  if (shouldLogging) {
    console.log(msg, ...args);
  }
};

export const print = (msg: string, ...args: any[]) => {
  if (SHOULD_LOGGING) {
    console.log(msg, ...args);
  }
};

export const printNodeType = (msg: string, path: { type: string }) => {
  print("### printNodeType: ", msg);

  const type = path.type;
  print("### index, printNodeType, path.type = ", type);
};
