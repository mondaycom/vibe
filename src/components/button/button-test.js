import React from "react";
import { sinon, expect } from "../../test/test-helpers";
import Button from "./button";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("<Buttoon />", () => {
  let clickActionStub;
  let buttonComponent;
  let text = "Click Me!";
  let className = "test-class";
  beforeEach(() => {
    clickActionStub = sinon.stub();
    buttonComponent = render(
      <Button className={className} onClick={clickActionStub}>
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
  describe("adding classnames", () => {
    it("should should add class name when provided", () => {
      const { container } = buttonComponent;
      const classNameQuery = container.querySelector(`.${className}`);
      expect(classNameQuery).to.be.ok;
    });
  });
});
