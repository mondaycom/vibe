import React, { forwardRef, useRef, useEffect, RefObject, createRef } from "react";
import { fireEvent, render, cleanup, act, screen, waitFor } from "@testing-library/react";
import useMergeRefs from "../useMergeRefs";

describe("useMergeRefs", () => {
  let Component: React.ElementType;
  let internalRef: RefObject<any>;

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
      cleanup();
    });

    it("should be able to set internal ref", () => {
      render(<Component />);
      waitFor(() => {
        expect(internalRef.current.innerText).toEqual("Lorem ipsum dolor sit amet");
      });
    });

    it("should be able to set object prop ref", () => {
      const propRef = createRef<HTMLElement>();
      expect(internalRef.current).toBeNull();
      render(<Component ref={propRef} />);
      waitFor(() => {
        expect(internalRef.current.innerText).toEqual("Lorem ipsum dolor sit amet");
        expect(propRef.current.innerText).toEqual("Lorem ipsum dolor sit amet");
      });
    });

    it("should be able to set function prop ref", () => {
      const state: {
        _ref: HTMLElement;
      } = {
        _ref: undefined
      };
      const propRef = (ref: HTMLElement) => {
        state._ref = ref;
      };

      render(<Component ref={propRef} />);
      waitFor(() => {
        expect(internalRef.current.innerText).toEqual("Lorem ipsum dolor sit amet");
        expect(state._ref.innerText).toEqual("Lorem ipsum dolor sit amet");
      });
    });
  });

  describe("call event listeners based on refs", () => {
    let innerRefCallbackStub: jest.Mock;
    let outerRefCallbackStub: jest.Mock;

    beforeEach(() => {
      innerRefCallbackStub = jest.fn();
      outerRefCallbackStub = jest.fn();

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
    });

    it("should not call any listeners if element didn't had click event", () => {
      render(<Component />);
      waitFor(() => {
        expect(innerRefCallbackStub.mock.calls.length).toBe(0);
      });
    });

    it("should call click listener based on internal ref if element has been clicked", () => {
      render(<Component />);
      const element = screen.getByText("Lorem ipsum dolor sit amet");
      act(() => {
        fireEvent.click(element);
      });
      waitFor(() => {
        expect(innerRefCallbackStub.mock.calls.length).toBe(1);
      });
    });

    it("it should call both listeners if ref prop was passed and element has been clicked", () => {
      const propRef = createRef<HTMLElement>();
      render(<Component ref={propRef} />);
      propRef.current.addEventListener("click", outerRefCallbackStub);
      const element = screen.getByText("Lorem ipsum dolor sit amet");
      act(() => {
        fireEvent.click(element);
      });
      propRef.current.removeEventListener("click", outerRefCallbackStub);
      waitFor(() => {
        expect(innerRefCallbackStub.mock.calls.length).toBe(1);
        expect(outerRefCallbackStub.mock.calls.length).toBe(0);
      });
    });

    it("it should not call any listener if ref prop was passed and element has not been clicked", () => {
      const propRef = createRef<HTMLElement>();
      render(<Component ref={propRef} />);
      propRef.current.addEventListener("click", outerRefCallbackStub);
      propRef.current.removeEventListener("click", outerRefCallbackStub);
      waitFor(() => {
        expect(innerRefCallbackStub.mock.calls.length).toBe(0);
        expect(outerRefCallbackStub.mock.calls.length).toBe(0);
      });
    });
  });
});
