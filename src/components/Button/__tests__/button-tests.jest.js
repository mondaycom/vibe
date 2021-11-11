import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { sinon, expect } from "../../../test/test-helpers";
import Button from "../Button";

describe("Button tests", () => {
  let clickActionStub;
  let onMouseDownStub;
  let buttonComponent;
  const text = "Click Me!";
  const className = "test-class";

  beforeEach(() => {
    clickActionStub = sinon.stub();
    onMouseDownStub = sinon.stub();
    buttonComponent = render(
      <Button className={className} onClick={clickActionStub} onMouseDown={onMouseDownStub}>
        {text}
      </Button>
    );
  });

  afterEach(() => {
    clickActionStub.reset();
    cleanup();
  });

  describe("click", () => {
    it("should call the click callback when clicked", () => {
      const { container } = buttonComponent;
      fireEvent.click(container.firstChild);
      expect(clickActionStub).to.be.calledOnce;
    });

    describe("disabled click", () => {
      it("should be disabled in the dom", () => {
        const { rerender, getByText } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} disabled>
            {text}
          </Button>
        );
        expect(getByText(text).closest("button").disabled).to.equal(true);
      });

      it("should not call the callback if disabled", () => {
        const { container, rerender } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} disabled>
            {text}
          </Button>
        );
        fireEvent.click(container.firstChild);
        expect(clickActionStub).not.to.be.calledOnce;
      });

      it("should not call the callback on loading", () => {
        const { container, rerender } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} loading>
            {text}
          </Button>
        );
        fireEvent.click(container.firstChild);
        expect(clickActionStub).not.to.be.calledOnce;
      });

      it("should not call the callback if success", () => {
        const { container, rerender } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} success>
            {text}
          </Button>
        );
        fireEvent.click(container.firstChild);
        expect(clickActionStub).not.to.be.calledOnce;
      });
    });
  });

  describe("mouse down", () => {
    it("should call the click callback when clicked", () => {
      const { container } = buttonComponent;
      fireEvent.mouseDown(container.firstChild);
      expect(onMouseDownStub).to.be.calledOnce;
    });
  });

  describe("adding classnames", () => {
    it("should should add class name when provided", () => {
      const { container } = buttonComponent;
      const classNameQuery = container.querySelector(`.${className}`);
      expect(classNameQuery).to.be.ok;
    });
  });

  describe("a11y", () => {
    it("should add the aria label", () => {
      const ariaLabel = "Icon Name";
      const { getByLabelText } = render(
        <Button ariaLabel={ariaLabel} className={className} onClick={clickActionStub} onMouseDown={onMouseDownStub}>
          {text}
        </Button>
      );
      const buttonElement = getByLabelText(ariaLabel);
      expect(buttonElement).to.be.ok;
    });
  });

  describe("sizes", () => {
    beforeEach(() => {
      const { unmount } = buttonComponent;
      unmount();
    });

    it("small size should add the relevant class small", () => {
      const { getByText } = render(
        <Button className={className} size={Button.sizes.SMALL}>
          {text}
        </Button>
      );
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--size-${Button.sizes.SMALL}`)).to.equal(true);
    });

    it("small size should add the relevant class medium", () => {
      const { getByText } = render(
        <Button className={className} size={Button.sizes.MEDIUM}>
          {text}
        </Button>
      );
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--size-${Button.sizes.MEDIUM}`)).to.equal(true);
    });

    it("small size should add the relevant class large", () => {
      const { getByText } = render(
        <Button className={className} size={Button.sizes.LARGE}>
          {text}
        </Button>
      );
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--size-${Button.sizes.LARGE}`)).to.equal(true);
    });
  });
  
  describe("colors", () => {
    beforeEach(() => {
      const { unmount } = buttonComponent;
      unmount();
    });

    it("should add primary color", () => {
      const { getByText } = render(<Button className={className}>{text}</Button>);
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--color-${Button.colors.PRIMARY}`)).to.equal(true);
    });

    it("should add primary positive", () => {
      const { getByText } = render(
        <Button className={className} color={Button.colors.POSITIVE}>
          {text}
        </Button>
      );
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--color-${Button.colors.POSITIVE}`)).to.equal(true);
    });

    it("should add primary negative", () => {
      const { getByText } = render(
        <Button className={className} color={Button.colors.NEGATIVE}>
          {text}
        </Button>
      );
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--color-${Button.colors.NEGATIVE}`)).to.equal(true);
    });
    
    it("should add primary on-primary", () => {
      const { getByText } = render(
        <Button className={className} color={Button.colors.ON_PRIMARY_COLOR}>
          {text}
        </Button>
      );
      const buttonElement = getByText(text);
      expect(buttonElement.classList.contains(`monday-style-button--color-${Button.colors.ON_PRIMARY_COLOR}`)).to.equal(
        true
      );
    });

    describe("success", () => {
      beforeEach(() => {
        const { unmount } = buttonComponent;
        unmount();
      });

      it("should change text to success text when success becomes true", () => {
        const { getByText, rerender, container } = render(
          <Button className={className} color={Button.colors.PRIMARY}>
            {text}
          </Button>
        );
        rerender(
          <Button success successText="Success">
            {text}
          </Button>
        );
        expect(getByText("Success")).to.be.ok;
      });

      it("color should be POSITIVE when success is true", () => {
        const { getByText } = render(
          <Button className={className} color={Button.colors.PRIMARY} success successText="Success">
            {text}
          </Button>
        );
        const buttonElement = getByText("Success");
        expect(buttonElement.classList.contains(`monday-style-button--color-${Button.colors.POSITIVE}`)).to.equal(true);
      });
    });
  });
});
