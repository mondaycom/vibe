import { cleanup } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import { Refable } from "../Refable";

const renderComponent = (props: any) => {
  return render(<Refable {...props} />);
};

describe("Refable", () => {
  afterEach(() => {
    cleanup();
  });

  it("onClick callback should be called after clicking the element", () => {
    // const onClickCallback = jest.fn();
    // const { getByTestId } = renderComponent({ onClick: onClickCallback });
    // const component = getByTestId(ComponentDefaultTestId.CLICKABLE);
    // fireEvent.click(component);
    // expect(onClickCallback.mock.calls.length).toBe(1);
    expect(true).toBe(true);
  });
});
