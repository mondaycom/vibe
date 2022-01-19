import { NAV_DIRECTIONS } from "../../../hooks/useFullKeyboardListeners";
import { getOppositeDirection, getDirectionMaps, focusElementWithDirection, getOutmostElementInDirection } from "../GridKeyboardNavigationContextHelper";

describe("GridKeyboardNavigationContextHelper", () => {
  const ELEMENT1 = "e1";
  const ELEMENT2 = "e2";
  const ELEMENT3 = "e3";
  const ELEMENT4 = "e4";
  const ELEMENT5 = "e5";

  describe("getDirectionMaps", () => {
    it("should return empty direction maps when no positions are supplied", () => {
      const input = [];
      const expected = {
        [NAV_DIRECTIONS.RIGHT]: new Map(),
        [NAV_DIRECTIONS.LEFT]: new Map(),
        [NAV_DIRECTIONS.UP]: new Map(),
        [NAV_DIRECTIONS.DOWN]: new Map()
      };

      const result = getDirectionMaps(input);

      expect(result).toEqual(expected);
    });

    it("should ignore positions in unexpected object schema", () => {
      const input = [
        { topElement: ELEMENT1, bottomElement: ELEMENT2 }, // this is the only valid input
        { unexpectedKey1: ELEMENT2, unexpectedKey2: ELEMENT3 },
        { topElement: ELEMENT4 },
        { bottomElement: ELEMENT3 },
        {}
      ];
      const expected = {
        [NAV_DIRECTIONS.RIGHT]: new Map(),
        [NAV_DIRECTIONS.LEFT]: new Map(),
        [NAV_DIRECTIONS.UP]: new Map([[ELEMENT2, ELEMENT1]]),
        [NAV_DIRECTIONS.DOWN]: new Map([[ELEMENT1, ELEMENT2]])
      };

      const result = getDirectionMaps(input);

      expect(result).toEqual(expected);
    });

    it("should return directions map which represent the relation between all positions", () => {
      const input = [
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ];
      const expected = {
        [NAV_DIRECTIONS.RIGHT]: new Map([
          [ELEMENT2, ELEMENT4], // ELEMENT4 is to the right of ELEMENT2...
          [ELEMENT4, ELEMENT5]
        ]),
        [NAV_DIRECTIONS.LEFT]: new Map([
          [ELEMENT5, ELEMENT4],
          [ELEMENT4, ELEMENT2]
        ]),
        [NAV_DIRECTIONS.UP]: new Map([
          [ELEMENT2, ELEMENT1],
          [ELEMENT3, ELEMENT2]
        ]),
        [NAV_DIRECTIONS.DOWN]: new Map([
          [ELEMENT1, ELEMENT2],
          [ELEMENT2, ELEMENT3]
        ])
      };

      const result = getDirectionMaps(input);

      expect(result).toEqual(expected);
    });
  });

  describe("getOppositeDirection", () => {
    [
      { direction: NAV_DIRECTIONS.LEFT, opposite: NAV_DIRECTIONS.RIGHT },
      { direction: NAV_DIRECTIONS.RIGHT, opposite: NAV_DIRECTIONS.LEFT },
      { direction: NAV_DIRECTIONS.UP, opposite: NAV_DIRECTIONS.DOWN },
      { direction: NAV_DIRECTIONS.DOWN, opposite: NAV_DIRECTIONS.UP }
    ].forEach(({ direction, opposite }) => {
      it(`should return "${opposite}" as the opposite of "${direction}"`, () => {
        expect(getOppositeDirection(direction)).toBe(opposite);
      });
    });
  });

  describe("focusElementWithDirection", () => {
    it("should send a custom action with the detail of keyboard direction", () => {
      const elementRef = { current: { dispatchEvent: jest.fn() } };
      const keyboardDirection = NAV_DIRECTIONS.LEFT;
      const expectedEvent = new CustomEvent("focus", { detail: { keyboardDirection } });

      focusElementWithDirection(elementRef, keyboardDirection);

      expect(elementRef.current.dispatchEvent).toHaveBeenCalledTimes(1);
      expect(elementRef.current.dispatchEvent).toHaveBeenCalledWith(expectedEvent);
    });

    it("should not throw when the element ref is missing", () => {
      focusElementWithDirection(undefined, NAV_DIRECTIONS.LEFT);
      // if we reach here - it didn't throw
    });
  });

  describe("getOutmostElementToFocus", () => {
    it("should return the right-most element when there are multiple horizontal connections", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ]);
      const direction = NAV_DIRECTIONS.RIGHT;
      const expected = ELEMENT5;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should return the left-most element when there are multiple horizontal connections", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ]);
      const direction = NAV_DIRECTIONS.LEFT;
      const expected = ELEMENT2;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should return the top-most element when there are multiple horizontal connections", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ]);
      const direction = NAV_DIRECTIONS.UP;
      const expected = ELEMENT1;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should return the bottom-most element when there are multiple horizontal connections", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ]);
      const direction = NAV_DIRECTIONS.DOWN;
      const expected = ELEMENT3;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the left-most element when asking for the BOTTOM element, and there are no vertical relations", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ]);
      const direction = NAV_DIRECTIONS.DOWN;
      const expected = ELEMENT2;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the left-most element when asking for the TOP element, and there are no vertical relations", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 },
      ]);
      const direction = NAV_DIRECTIONS.UP;
      const expected = ELEMENT2;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the top-most element when asking for the LEFT element, and there are no horizontal relations", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
      ]);
      const direction = NAV_DIRECTIONS.LEFT;
      const expected = ELEMENT1;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the top-most element when asking for the RIGHT element, and there are no horizontal relations", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
      ]);
      const direction = NAV_DIRECTIONS.RIGHT;
      const expected = ELEMENT1;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });
  });
});
