import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ModalHeader } from "../../../components";
import { ModalExampleWrapper } from "../__stories__/Modal.stories.helpers";
import { ComponentDefaultTestId } from "../../../tests/test-ids-utils";

const MODAL_TITLE_TEXT = "Modal title";
const MODAL_ID = "story-book-modal";
const MODAL_TEST_ID = "modal-test-id";
const CLOSE_BUTTON_LABEL = "close";
const OPEN_BUTTON_TEXT = "Open";

const ModalManager = props => {
  const { children, openOnStart = false, isAlertDialog = false, title } = props;
  return (
    <ModalExampleWrapper
      buttonTitle="Open"
      show={openOnStart}
      id={MODAL_ID}
      data-testid={MODAL_TEST_ID}
      title={title || MODAL_TITLE_TEXT}
      alertDialog={isAlertDialog}
      openModalTestId={OPEN_BUTTON_TEXT}
    >
      {children}
    </ModalExampleWrapper>
  );
};

const getOpenButton = component => component.getByText(OPEN_BUTTON_TEXT);
const findModal = component => component.findByRole("dialog");
const queryModal = component => component.queryByRole("dialog");
const queryClosedModal = component => component.queryByTestId(MODAL_TEST_ID);
const queryAlertModal = component => component.queryByRole("alertdialog");
const findCloseButton = component => component.findByLabelText(CLOSE_BUTTON_LABEL);
const queryCloseButton = component => component.queryByLabelText(CLOSE_BUTTON_LABEL);
const findOverlay = component => component.findByTestId(ComponentDefaultTestId.MODAL_OVERLAY);

const renderComponent = (props = {}) => {
  const { content } = props;
  return render(<ModalManager {...props}>{content ? content : <div>content of the modal</div>}</ModalManager>);
};

describe("Modal tests", () => {
  afterEach(() => {
    cleanup();
  });

  describe("open", () => {
    it("should open when triggered", async () => {
      const component = renderComponent({ openOnStart: false });
      const openButton = getOpenButton(component);
      fireEvent.click(openButton);
      expect(await findModal(component)).toBeInTheDocument();
    });

    it("should open on start if show=true", async () => {
      const component = renderComponent({ openOnStart: true });
      expect(await findModal(component)).toBeInTheDocument();
    });
  });

  describe("close", () => {
    it("should close when clicking on close button", async () => {
      const component = renderComponent({ openOnStart: true });
      fireEvent.click(await findCloseButton(component));
      expect(queryModal(component)).not.toBeInTheDocument();
    });

    it("should close when clicking on the modal overlay", async () => {
      const component = renderComponent({ openOnStart: true });
      fireEvent.click(await findOverlay(component));
      expect(queryModal(component)).not.toBeInTheDocument();
    });

    it("should close when clicking on the esc key", async () => {
      const component = renderComponent({ openOnStart: true });
      fireEvent.keyDown(queryModal(component), { key: "Escape", code: "Escape" });

      expect(queryModal(component)).not.toBeInTheDocument();
    });

    it("should NOT close on Esc or overlay click if alertDialog = true", async () => {
      const component = renderComponent({ openOnStart: true, isAlertDialog: true });
      fireEvent.keyDown(queryAlertModal(component), { key: "Escape", code: "Escape" });
      fireEvent.click(await findOverlay(component));

      expect(queryAlertModal(component)).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    describe("container", () => {
      it("should have relevant aria attributes when shown", () => {
        const component = renderComponent({ openOnStart: true });
        const modal = queryModal(component);
        expect(modal).toHaveAttribute("id");
        expect(modal).toHaveAttribute("aria-modal");
        expect(modal).toHaveAttribute("aria-labelledby");
        expect(modal).not.toHaveAttribute("aria-hidden");
        expect(modal.getAttribute("role")).toMatch("dialog");
      });

      it("should have relevant aria attributes when hidden", () => {
        const component = renderComponent();
        const modal = queryClosedModal(component);
        expect(modal).toHaveAttribute("id");
        expect(modal).toHaveAttribute("aria-modal");
        expect(modal).toHaveAttribute("aria-labelledby");
        expect(modal).toHaveAttribute("aria-hidden");
        expect(modal.getAttribute("role")).toEqual("dialog");
      });

      it("should have relevant aria attributes when in alert mode", () => {
        const component = renderComponent({ isAlertDialog: true });
        const modal = queryClosedModal(component);
        expect(modal.getAttribute("role")).toEqual("alertdialog");
      });
    });

    describe("modal", () => {
      it("should have relevant attributes", function () {
        const component = renderComponent();
        const title = component.queryByText(MODAL_TITLE_TEXT);
        expect(title).toHaveAttribute("id");
      });
    });

    describe("title", () => {
      it("should have relevant attributes", function () {
        const component = renderComponent({ openOnStart: true });
        const title = component.queryByRole("document");
        expect(title).toBeInTheDocument();
      });
    });

    describe("close button", () => {
      it("should have relevant attributes", function () {
        const component = renderComponent({ openOnStart: true });
        const closeButton = queryCloseButton(component);
        expect(closeButton).toHaveAttribute("aria-label");
      });
    });
  });

  describe("rendering", () => {
    it("should render a title if the title prop is provided", () => {
      const TEST_TITLE = "test title";
      const component = renderComponent({ openOnStart: true, title: TEST_TITLE });
      const title = component.queryByText(TEST_TITLE);
      expect(title).toBeInTheDocument();
    });

    it("should render ModalHeader if passed as children", () => {
      const TEST_TITLE = "test title";
      const component = renderComponent({
        openOnStart: true,
        content: <ModalHeader title={TEST_TITLE} />
      });
      const title = component.queryByText(TEST_TITLE);
      expect(title).toBeInTheDocument();
    });

    it("should render ModalHeader if passed as children", () => {
      const TEST_TITLE = "test title";
      const component = renderComponent({
        openOnStart: true,
        content: <ModalHeader title={TEST_TITLE} />
      });
      const title = component.queryByText(TEST_TITLE);
      expect(title).toBeInTheDocument();
    });
  });
});
