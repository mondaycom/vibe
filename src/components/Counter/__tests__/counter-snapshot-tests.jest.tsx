import renderer from "react-test-renderer";
import Counter from "../Counter";

describe("Counter renders correctly", () => {
  it("with count below the limit", () => {
    const tree = renderer.create(<Counter count={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with count above limit", () => {
    const tree = renderer.create(<Counter count={1000} maxDigits={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with the prefix", () => {
    const tree = renderer.create(<Counter count={13} prefix="+" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with negative color", () => {
    const tree = renderer.create(<Counter color={Counter.colors.NEGATIVE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with line kind", () => {
    const tree = renderer.create(<Counter kind={Counter.kinds.LINE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with count above limit", () => {
    const tree = renderer.create(<Counter maxDigits={4} count={1050} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with small size", () => {
    const tree = renderer.create(<Counter size={Counter.sizes.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabeledBy", () => {
    const tree = renderer.create(<Counter ariaLabeledBy="aria label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
