const SHOULD_LOGGING = false;

export const printWithCondition = (shouldLogging: boolean, msg: string, ...args: any[]) => {
  if (shouldLogging) {
    console.log(msg, ...args);
  }
};

export const printAlways = (msg: string, ...args: any[]) => {
  console.log(msg, ...args);
};

export const print = (msg: string, ...args: any[]) => {
  if (SHOULD_LOGGING) {
    console.log(msg, ...args);
  }
};
