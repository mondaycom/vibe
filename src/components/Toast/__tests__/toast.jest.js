import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Toast from "../Toast";
import renderer from "react-test-renderer";
import { Checkbox } from "../../Checkbox/Checkbox";

jest.useFakeTimers();

const renderComponent = ({ ...props } = {}, contenct = "") => {
  return render(<Toast {...props}>{contenct}</Toast>);
};
describe("Toast tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly (renders nothing) with empty props", () => {
      const tree = renderer.create(<Toast />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders nothing when open is false", () => {
      const tree = renderer.create(<Toast open={false}>Something Happened</Toast>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders toast when open is true", () => {
      const tree = renderer.create(<Toast open={true}>Something Happened</Toast>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("don't renders close button if closeable=false", () => {
      const tree = renderer
        .create(
          <Toast open={true} closeable={false}>
            Something Happened
          </Toast>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with button", () => {
      const tree = renderer
        .create(
          <Toast open={true} actions={[{ type: Toast.actionTypes.BUTTON, content: "Undo 5" }]}>
            Something Happened
          </Toast>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with link", () => {
      const tree = renderer
        .create(
          <Toast
            open={true}
            actions={[{ type: Toast.actionTypes.LINK, text: "Lorem ipsum", href: "https://monday.com" }]}
          >
            Something Happened
          </Toast>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with button and link", () => {
      const tree = renderer
        .create(
          <Toast
            open={true}
            actions={[
              { type: Toast.actionTypes.BUTTON, content: "Undo 5" },
              { type: Toast.actionTypes.LINK, text: "Lorem ipsum", href: "https://monday.com" }
            ]}
          >
            Something Happened
          </Toast>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("Integration Tests", () => {
    afterEach(() => {
      cleanup();
    });

    it("calls onClose when click on close button", () => {
      const onCloseMock = jest.fn();
      const toast = renderComponent({
        open: true,
        onClose: onCloseMock
      });
      const closeButton = toast.getByLabelText("close-toast");

      act(() => {
        fireEvent.click(closeButton);
      });

      expect(onCloseMock.mock.calls.length).toBe(1);
    });

    it("calls onClose after 1S when autoHideDuration=1000", () => {
      const onCloseMock = jest.fn();
      renderComponent({
        onClose: onCloseMock,
        autoHideDuration: 1000,
        open: true
      });
      jest.advanceTimersByTime(1000);
      expect(onCloseMock.mock.calls.length).toBe(1);
    });
  });
});
