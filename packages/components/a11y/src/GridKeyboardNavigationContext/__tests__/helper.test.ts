import { describe, it, expect } from "vitest";
import { NavDirections } from "@vibe/shared";
import {
  getOppositeDirection,
  getDirectionMaps,
  getOutmostElementInDirection,
  getNextElementToFocusInDirection
} from "../helper";

describe("GridKeyboardNavigationContext.helper", () => {
  const ELEMENT1 = { current: "e1" };
  const ELEMENT2 = { current: "e2" };
  const ELEMENT3 = { current: "e3" };
  const ELEMENT4 = { current: "e4" };
  const ELEMENT5 = { current: "e5" };
  const UNMOUNTED_ELEMENT_1 = { current: null };
  const UNMOUNTED_ELEMENT_2 = { current: null };
  const DISABLED_ELEMENT = { current: { disabled: true } };
  const DISABLED_DATASET_ELEMENT = { current: { dataset: { disabled: "true" } } };
  const DATASET_NOT_DISABLED_ELEMENT = { current: { dataset: { disabled: "false" } } };

  describe("getDirectionMaps", () => {
    it("should return empty direction maps when no positions are supplied", () => {
      const input = [];
      const expected = {
        [NavDirections.RIGHT]: new Map(),
        [NavDirections.LEFT]: new Map(),
        [NavDirections.UP]: new Map(),
        [NavDirections.DOWN]: new Map()
      };

      const result = getDirectionMaps(input);

      expect(result).toEqual(expected);
    });

    it("should ignore positions in unexpected object schema", () => {
      const input = [
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { unexpectedKey1: ELEMENT2, unexpectedKey2: ELEMENT3 },
        { topElement: ELEMENT4 },
        { bottomElement: ELEMENT3 },
        {}
      ];
      const expected = {
        [NavDirections.RIGHT]: new Map(),
        [NavDirections.LEFT]: new Map(),
        [NavDirections.UP]: new Map([[ELEMENT2, ELEMENT1]]),
        [NavDirections.DOWN]: new Map([[ELEMENT1, ELEMENT2]])
      };

      const result = getDirectionMaps(input);

      expect(result).toEqual(expected);
    });

    it("should return directions map which represent the relation between all positions", () => {
      const input = [
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ];
      const expected = {
        [NavDirections.RIGHT]: new Map([
          [ELEMENT2, ELEMENT4],
          [ELEMENT4, ELEMENT5]
        ]),
        [NavDirections.LEFT]: new Map([
          [ELEMENT5, ELEMENT4],
          [ELEMENT4, ELEMENT2]
        ]),
        [NavDirections.UP]: new Map([
          [ELEMENT2, ELEMENT1],
          [ELEMENT3, ELEMENT2]
        ]),
        [NavDirections.DOWN]: new Map([
          [ELEMENT1, ELEMENT2],
          [ELEMENT2, ELEMENT3]
        ])
      };

      const result = getDirectionMaps(input);

      expect(result).toEqual(expected);
    });

    it("should throw when a circular vertical positioning is added", () => {
      const input = [
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT1 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ];

      expect(() => getDirectionMaps(input)).toThrowError(
        "Circular positioning detected: the BOTTOM element is already positioned to the TOP of the TOP element. This probably means the layout isn't ordered correctly."
      );
    });

    it("should throw when a circular horizontal positioning is added", () => {
      const input = [
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT2 },
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT5 }
      ];

      expect(() => getDirectionMaps(input)).toThrowError(
        "Circular positioning detected: the RIGHT element is already positioned to the LEFT of the LEFT element. This probably means the layout isn't ordered correctly."
      );
    });
  });

  describe("getOppositeDirection", () => {
    [
      { direction: NavDirections.LEFT, opposite: NavDirections.RIGHT },
      { direction: NavDirections.RIGHT, opposite: NavDirections.LEFT },
      { direction: NavDirections.UP, opposite: NavDirections.DOWN },
      { direction: NavDirections.DOWN, opposite: NavDirections.UP }
    ].forEach(({ direction, opposite }) => {
      it(`should return "${opposite}" as the opposite of "${direction}"`, () => {
        expect(getOppositeDirection(direction)).toBe(opposite);
      });
    });

    it("should throw on unknown input", () => {
      const input = "UNKNOWN!";
      expect(() => getOppositeDirection(input)).toThrowError(`Unexpected direction: ${input}`);
    });
  });

  describe("getOutmostElementToFocus", () => {
    it("should return the right-most element when there are multiple horizontal connections", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      expect(getOutmostElementInDirection(directionMaps, NavDirections.RIGHT)).toEqual(ELEMENT5);
    });

    it("should return the left-most element when there are multiple horizontal connections", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 },
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      expect(getOutmostElementInDirection(directionMaps, NavDirections.LEFT)).toEqual(ELEMENT2);
    });

    it("should return the top-most element", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 }
      ]);
      expect(getOutmostElementInDirection(directionMaps, NavDirections.UP)).toEqual(ELEMENT1);
    });

    it("should return the bottom-most element", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 }
      ]);
      expect(getOutmostElementInDirection(directionMaps, NavDirections.DOWN)).toEqual(ELEMENT3);
    });

    it("should skip unmounted bottom-most element", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: UNMOUNTED_ELEMENT_1 }
      ]);
      expect(getOutmostElementInDirection(directionMaps, NavDirections.DOWN)).toEqual(ELEMENT2);
    });

    it("should skip two unmounted right-most elements", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT1, rightElement: UNMOUNTED_ELEMENT_2 },
        { leftElement: UNMOUNTED_ELEMENT_2, rightElement: UNMOUNTED_ELEMENT_1 }
      ]);
      expect(getOutmostElementInDirection(directionMaps, NavDirections.RIGHT)).toEqual(ELEMENT1);
    });
  });

  describe("getNextElementToFocusInDirection", () => {
    it("should return null if the referenced element isn't positioned on that direction", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      const directionMap = directionMaps[NavDirections.RIGHT];
      expect(getNextElementToFocusInDirection(directionMap, ELEMENT1)).toBeNull();
    });

    it("return null if there's only one next ref, and it is currently null", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: UNMOUNTED_ELEMENT_1 }]);
      expect(getNextElementToFocusInDirection(directionMaps[NavDirections.RIGHT], ELEMENT1)).toBeNull();
    });

    it("return null if there's only one next ref, and it is disabled", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: DISABLED_ELEMENT }]);
      expect(getNextElementToFocusInDirection(directionMaps[NavDirections.RIGHT], ELEMENT1)).toBeNull();
    });

    it("return null if there's only one next ref, and it is disabled with data-disabled='true'", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: DISABLED_DATASET_ELEMENT }]);
      expect(getNextElementToFocusInDirection(directionMaps[NavDirections.RIGHT], ELEMENT1)).toBeNull();
    });

    it("return the next element ref even if it has data-disabled='false'", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: DATASET_NOT_DISABLED_ELEMENT }]);
      expect(getNextElementToFocusInDirection(directionMaps[NavDirections.RIGHT], ELEMENT1)).toBe(
        DATASET_NOT_DISABLED_ELEMENT
      );
    });

    it("return the next focusable element ref, skipping disabled or unmounted elements", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT1, rightElement: UNMOUNTED_ELEMENT_1 },
        { leftElement: UNMOUNTED_ELEMENT_1, rightElement: DISABLED_ELEMENT },
        { leftElement: DISABLED_ELEMENT, rightElement: ELEMENT2 }
      ]);
      expect(getNextElementToFocusInDirection(directionMaps[NavDirections.RIGHT], ELEMENT1)).toBe(ELEMENT2);
    });
  });
});
