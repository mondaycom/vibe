import { NodePath } from "@babel/traverse";

const LOGGING = false;

export const print = (consoleLog: () => void) => {
  if (LOGGING) {
    consoleLog();
  }
};

export const printNodeType = (msg: string, path: NodePath) => {
  print(() => console.log("### printNodeType: ", msg));

  const type = path.type;
  print(() => console.log("### index, printNodeType, path.type = ", type));

  // const isObjectProperty = path.isObjectProperty();
  // console.log(
  // 	"### index, path.isObjectProperty = ",
  // 	isObjectProperty
  // );
  //
  // const isProperty = path.isProperty();
  // console.log(
  // 	"### index, path.isProperty = ",
  // 	isProperty
  // );
  //
  // const isIdentifier = path.isIdentifier();
  // console.log(
  // 	"### index, path.isIdentifier = ",
  // 	isIdentifier
  // );

  // const isJSXExpressionContainer = path.isJSXExpressionContainer();
  // console.log("### index, path.isJSXExpressionContainer = ", isJSXExpressionContainer);
  //
  // const isCallExpression = path.isCallExpression();
  // console.log("### index, path.isCallExpression = ", isCallExpression);
  //
  // const isAssignmentExpression = path.isAssignmentExpression();
  // console.log("### index, path.isAssignmentExpression = ", isAssignmentExpression);
  //
  // const isAssignmentPattern = path.isAssignmentPattern();
  // console.log("### index, path.isAssignmentPattern = ", isAssignmentPattern);
};
