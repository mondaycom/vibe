import { render } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter tests", () => {
  const className = "test-class";

  const getComponentToRender = ({ count = 1, ...props } = {}) => {
    return <Counter {...props} className={className} count={count} />;
  };

  const renderComponent = ({ ...props } = {}) => {
    return render(getComponentToRender(props));
  };

  it("Shows the right count", () => {
    const counterComponent = renderComponent({ count: 1 });
    const counterText = counterComponent.getByText("1");
    expect(counterText).toBeTruthy();
  });

  it("Shows 999+ if count is above limit", () => {
    const counterComponent = renderComponent({ count: 1000, maxDigits: 3 });
    const counterText = counterComponent.getByText("999+");
    expect(counterText).toBeTruthy();
  });

  describe("a11y", () => {
    it("should add the aria label", () => {
      const count = 3;
      const ariaLabel = "Label Name ";
      const { getByLabelText } = render(<Counter ariaLabel={ariaLabel} count={count} />);
      const counterComponent = getByLabelText(ariaLabel + count);
      expect(counterComponent).toBeTruthy();
    });
  });
});
