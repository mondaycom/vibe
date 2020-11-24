import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  act
} from "@testing-library/react";
import renderer from "react-test-renderer";
import SplitButton from "../SplitButton";

jest.useFakeTimers();

const text = "Click Me!";
const className = "test-class";
const secondaryContentText = "Test secondary dialog content";
const secondaryContent = <div>{secondaryContentText}</div>;
const SecondaryButtonAriaLabel = "secondary button";

const renderComponent = ({ ...props } = {}) => {
  return render(
    <SplitButton
      {...props}
      className={className}
      secondaryDialogContent={secondaryContent}
    >
      {text}
    </SplitButton>
  );
};

describe("<SplitButton />", () => {
  afterEach(() => {
    cleanup();
  });

  it("opens the secondary content dialog on click", () => {
    const splitButtonComponent = renderComponent();
    const arrowButton = splitButtonComponent.getByLabelText(
      SecondaryButtonAriaLabel
    );
    act(() => {
      fireEvent.click(arrowButton);
      jest.advanceTimersByTime(1000);
    });
    const expectedSecondaryDialog = screen.getByText(secondaryContentText);
    expect(expectedSecondaryDialog).toBeTruthy();
  });

  it("doesn't open the secondary content dialog on click", () => {
    const splitButtonComponent = renderComponent({ disabled: true });
    const arrowButton = splitButtonComponent.getByLabelText(
      SecondaryButtonAriaLabel
    );
    act(() => {
      fireEvent.click(arrowButton);
      jest.advanceTimersByTime(1000);
    });
    const expectedSecondaryDialog = screen.queryByText(secondaryContentText);
    expect(expectedSecondaryDialog).toBeFalsy();
  });

  describe("callbacks", () => {
    it("calls onSecondaryDialogDidShow when click on secondaryButton", () => {
      const onSecondaryDialogDidShowMock = jest.fn();
      const splitButtonComponent = renderComponent({
        onSecondaryDialogDidShow: onSecondaryDialogDidShowMock
      });
      const arrowButton = splitButtonComponent.getByLabelText(
        SecondaryButtonAriaLabel
      );
      act(() => {
        fireEvent.click(arrowButton);
      });
      jest.advanceTimersByTime(1000);
      expect(onSecondaryDialogDidShowMock.mock.calls.length).toBe(1);
    });

    it("calls onSecondaryDialogDidHide when click on secondaryButton", () => {
      const onSecondaryDialogDidHideMock = jest.fn();
      const splitButtonComponent = renderComponent({
        open: true, // The button should be rendered with the dialog opened
        onSecondaryDialogDidHide: onSecondaryDialogDidHideMock
      });
      const arrowButton = splitButtonComponent.getByLabelText(
        SecondaryButtonAriaLabel
      );
      jest.advanceTimersByTime(1000);
      act(() => {
        fireEvent.click(arrowButton);
        jest.advanceTimersByTime(50000000);
        fireEvent.click(arrowButton);
        jest.advanceTimersByTime(50000000);
      });
      screen.debug();
      expect(onSecondaryDialogDidHideMock.mock.calls.length).toBe(1);
    });
  });
});

describe("Snapshots", () => {
  it("renders correctly with only required props", () => {
    const tree = renderer
      .create(<SplitButton secondaryDialogContent={secondaryContent} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with disabled", () => {
    const tree = renderer
      .create(
        <SplitButton
          secondaryDialogContent={secondaryContent}
          disabled={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with tertiary button", () => {
    const tree = renderer
      .create(
        <SplitButton
          secondaryDialogContent={secondaryContent}
          kind={SplitButton.kinds.TERTIARY}
          disabled={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
