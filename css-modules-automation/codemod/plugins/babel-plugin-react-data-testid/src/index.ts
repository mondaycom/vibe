import { PluginObj, Visitor } from '@babel/core'
import * as t from '@babel/types'
import { printWithCondition } from '../../../src/utils/commonProcess/print'
// eslint-disable-next-line import/no-extraneous-dependencies
// import blog from 'babel-log'

function createDataAttribute(name: string, attributeName: string) {
  return t.jsxAttribute(t.jsxIdentifier(attributeName), t.stringLiteral(name))
}

function hasDataAttribute(
  node: t.JSXOpeningElement,
  attributeName: string
): boolean {
  return node.attributes.some(
    (attribute) =>
      t.isJSXAttribute(attribute) &&
      t.isJSXIdentifier(attribute.name, { name: attributeName })
  )
}

type VisitorState = { name: string; attributes: string[] }

const returnStatementVistor: Visitor<VisitorState> = {
  // topがフラグメントのときはスキップする
  JSXFragment(path) {
    path.skip()
  },
  JSXElement(path, { name, attributes }) {
    printWithCondition(true, '||| returnStatementVistor', name, attributes)
    const openingElement = path.get('openingElement')

    // topにあるJSX Elementのみ処理する
    path.skip()

    for (const attribute of attributes) {
      // すでにdata-testidがある場合は処理しない
      if (!hasDataAttribute(openingElement.node, attribute)) {
        const dataAttribute = createDataAttribute(name, attribute)
        // @ts-ignore
        openingElement.node.attributes.push(dataAttribute)
      }
    }
  },
}

export type State = {
  opts: {
    attributes?: string[]
  }
}

export default (): PluginObj<State> => {
  printWithCondition(true, 'PluginObj')
  return {
    name: 'react-data-testid',
    visitor: {
      Program: (programPath, state) => {
        printWithCondition(true, 'PluginObj Program')
        // programPath.traverse(functionVisitors, {
        //   opts: { attributes: [] },
        // })
      },
    },
    // ReturnStatement: (path, state) => {
    //   printWithCondition(true, '||| plugin, ReturnStatement', path.node)
    // },
    // 'FunctionExpression|ArrowFunctionExpression|FunctionDeclaration': (
    //   path: NodePath<FunctionType>,
    //   state: State
    // ) => {
    //   printWithCondition(true, '||| plugin', path.node)
    //
    //   const identifier = nameForReactComponent(path)
    //   if (!identifier) {
    //     return
    //   }
    //
    //   const attributes = state.opts.attributes ?? [DEFAULT_DATA_TESTID]
    //
    //   if (path.isArrowFunctionExpression()) {
    //     path.traverse(returnStatementVistor, {
    //       name: identifier.name,
    //       attributes,
    //     })
    //   } else {
    //     path.traverse(functionVisitor, { name: identifier.name, attributes })
    //   }
    // },
    // },
  }
}
