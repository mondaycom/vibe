// import { State } from '../index'
// import { NodePath } from '@babel/traverse'
// import * as t from '@babel/types'
// import { Visitor } from '@babel/core'
// import { printWithCondition } from '../../../../src/utils/commonProcess/print'
//
// type FunctionType =
//   | t.FunctionDeclaration
//   | t.FunctionExpression
//   | t.ArrowFunctionExpression
//
// function nameForReactComponent(
//   path: NodePath<FunctionType>
// ): t.Identifier | null {
//   const { parentPath } = path
//   if (!t.isArrowFunctionExpression(path.node) && t.isIdentifier(path.node.id)) {
//     return path.node.id
//   }
//   if (t.isVariableDeclarator(parentPath)) {
//     // @ts-ignore
//     return parentPath.node.id
//   }
//   return null
// }
//
// const DEFAULT_DATA_TESTID = 'data-testid'
//
// export const functionVisitors: Visitor<State> = {
//   // @ts-ignore
//   'FunctionExpression|ArrowFunctionExpression|FunctionDeclaration': (
//     path: NodePath<FunctionType>,
//     state: State
//   ) => {
//     printWithCondition(true, '||| plugin', path.node)
//   },
//   ReturnStatement: (path, state) => {
//     printWithCondition(true, '||| plugin ReturnStatement', path.node)
//   },
//   // 'FunctionExpression|ArrowFunctionExpression|FunctionDeclaration': (
//   //   path: NodePath<FunctionType>,
//   //   state: State
//   // ) => {
//   //   printWithCondition(true, '||| plugin', path.node)
//   //
//   //   const identifier = nameForReactComponent(path)
//   //   if (!identifier) {
//   //     return
//   //   }
//   //
//   //   const attributes = state.opts.attributes ?? [DEFAULT_DATA_TESTID]
//   //
//   //   if (path.isArrowFunctionExpression()) {
//   //     path.traverse(returnStatementVistor, {
//   //       name: identifier.name,
//   //       attributes,
//   //     })
//   //   } else {
//   //     path.traverse(functionVisitor, { name: identifier.name, attributes })
//   //   }
//   // },
// }
