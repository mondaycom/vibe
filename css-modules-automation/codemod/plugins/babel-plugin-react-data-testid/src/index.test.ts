import pluginTester from 'babel-plugin-tester'
import plugin from '.'

const test1 = {
  title: 'function Component',
  code: `
function Div() {
  return <div />
}

function Nested() {
  return (
    <div>
      hello
      <div>world</div>
    </div>
  )
}
      `,
}

pluginTester({
  plugin,
  babelOptions: { parserOpts: { plugins: ['jsx'] } },
  snapshot: true,
  tests: [
    test1,
    {
      title: 'arrow function',
      code: `
const Div = () => <div />

const DivBody = () => {
  return <div />
}

const Div2 = () => <Div />
      `,
    },
    {
      title: 'with children',
      code: `
const Div = ({ children }) => <div>{children}</div>

function Div2({ children }) {
  return <div>{children}</div>
}
      `,
    },
    {
      title: 'fragment',
      code: `
import React from 'react'

function Items() {
  return <>
    {items.map((item) => <Item key={item.key} />)}
  </>
}

const Items2 = () => <React.Fragment>hello</React.Fragment>
      `,
    },
    {
      title: 'with data-testid',
      code: `
const Div = () => <div data-testid="hello" />
    `,
    },
    {
      title: 'export default',
      code: `
export default () => {
  return <div>hello</div>
}
      `,
    },
    {
      title: 'jsx spread attribute',
      code: `
const Div = (props) => {
  return <div {...props}>hello</div>
}
      `,
    },
  ],
})

pluginTester({
  title: 'with attributes',
  plugin,
  pluginOptions: {
    attributes: ['data-testid', 'data-cy'],
  },
  babelOptions: { parserOpts: { plugins: ['jsx'] } },
  snapshot: true,
  tests: [
    test1,
    {
      title: 'with data-cy',
      code: `
const Div = () => <div data-cy="hello" />
    `,
    },
  ],
})
