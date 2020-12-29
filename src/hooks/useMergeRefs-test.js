import React, { forwardRef, useRef, useEffect } from "react";
import { fireEvent, render, cleanup, act, screen } from "@testing-library/react";
import useMergeRefs from "./useMergeRefs";
import { sinon, expect } from "../test/test-helpers";

describe("useMergeRefs", () => {
  let Component;
  let internalRef;

  describe("set ref", () => {
    beforeEach(() => {
      Component = forwardRef((props, ref) => {
        internalRef = useRef(null);
        const mergedRef = useMergeRefs({ refs: [ref, internalRef] });
        return (
          <div {...props} ref={mergedRef}>
            Lorem ipsum dolor sit amet
          </div>
        );
      });
    });

    afterEach(() => {
      internalRef = null;
      Component = null;
      cleanup();
    });

    it("should be able to render Component", () => {
      render(<Component />);
    });

    it("should be able to set internal ref", () => {
      expect(internalRef).to.eq(null);
      render(<Component />);
      expect(internalRef.current.innerText).to.eq("Lorem ipsum dolor sit amet");
    });

    it("should be able to set object prop ref", () => {
      const propRef = {};
      expect(internalRef).to.eq(null);
      render(<Component ref={propRef} />);
      expect(internalRef.current.innerText).to.eq("Lorem ipsum dolor sit amet");
      expect(propRef.current.innerText).to.eq("Lorem ipsum dolor sit amet");
    });

    it("should be able to set function prop ref", () => {
      const state = {};
      const propRef = ref => {
        state._ref = ref;
      };

      expect(internalRef).to.eq(null);
      render(<Component ref={propRef} />);
      expect(internalRef.current.innerText).to.eq("Lorem ipsum dolor sit amet");
      expect(state._ref.innerText).to.eq("Lorem ipsum dolor sit amet");
    });
  });

  describe("call event listeners based on refs", () => {
    let innerRefCallbackStub;
    let outerRefCallbackStub;

    beforeEach(() => {
      innerRefCallbackStub = sinon.stub();
      outerRefCallbackStub = sinon.stub();

      Component = forwardRef((props, ref) => {
        internalRef = useRef();

        const mergedRef = useMergeRefs({ refs: [ref, internalRef] });

        useEffect(() => {
          internalRef.current.addEventListener("click", innerRefCallbackStub);
          return () => {
            internalRef.current.removeEventListener("click", innerRefCallbackStub);
          };
        }, []);

        return (
          <div {...props} ref={mergedRef}>
            Lorem ipsum dolor sit amet
          </div>
        );
      });
    });

    afterEach(() => {
      cleanup();
      internalRef = null;
      Component = null;
      innerRefCallbackStub.reset();
      outerRefCallbackStub.reset();
    });

    it("should not call any listeners if element didn't had click event", () => {
      render(<Component />);
      expect(innerRefCallbackStub).to.not.be.called;
    });

    it("should call click listener based on internal ref if element has been clicked", () => {
      render(<Component />);
      const element = screen.getByText("Lorem ipsum dolor sit amet");
      act(() => fireEvent.click(element));
      expect(innerRefCallbackStub).to.be.calledOnce;
    });

    it("it should call both listeners if ref prop was passed and element has been clicked", () => {
      const propRef = {};
      render(<Component ref={propRef} />);
      propRef.current.addEventListener("click", outerRefCallbackStub);
      const element = screen.getByText("Lorem ipsum dolor sit amet");
      act(() => {
        fireEvent.click(element);
      });
      propRef.current.removeEventListener("click", outerRefCallbackStub);
      expect(innerRefCallbackStub).to.be.calledOnce;
      expect(outerRefCallbackStub).to.be.calledOnce;
    });

    it("it should not call any listener if ref prop was passed and element has not been clicked", () => {
      const propRef = {};
      render(<Component ref={propRef} />);
      propRef.current.addEventListener("click", outerRefCallbackStub);
      propRef.current.removeEventListener("click", outerRefCallbackStub);
      expect(innerRefCallbackStub).to.not.be.called;
      expect(outerRefCallbackStub).to.not.be.called;
    });
  });
});
