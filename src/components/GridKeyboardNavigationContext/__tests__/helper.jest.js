import { NAV_DIRECTIONS } from "../../../hooks/useFullKeyboardListeners";
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
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
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

    it("should throw when a circular vertical positioning is added", () => {
      const input = [
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT1 }, // invalid
        { leftElement: ELEMENT2, rightElement: ELEMENT4 }, // valid
        { leftElement: ELEMENT4, rightElement: ELEMENT5 } // valid
      ];

      expect(() => getDirectionMaps(input)).toThrowError(
        "Circular positioning detected: the BOTTOM element is already positioned to the TOP of the TOP element. This probably means the layout isn't ordered correctly."
      );
    });

    it("should throw when a circular horizontal positioning is added", () => {
      const input = [
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT2 }, // invalid
        { topElement: ELEMENT1, bottomElement: ELEMENT2 }, // valid
        { topElement: ELEMENT2, bottomElement: ELEMENT5 } // valid
      ];

      expect(() => getDirectionMaps(input)).toThrowError(
        "Circular positioning detected: the RIGHT element is already positioned to the LEFT of the LEFT element. This probably means the layout isn't ordered correctly."
      );
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
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
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
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
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
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      const direction = NAV_DIRECTIONS.DOWN;
      const expected = ELEMENT3;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the left-most element when asking for the BOTTOM element, and there are no vertical relations", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      const direction = NAV_DIRECTIONS.DOWN;
      const expected = ELEMENT2;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the left-most element when asking for the TOP element, and there are no vertical relations", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      const direction = NAV_DIRECTIONS.UP;
      const expected = ELEMENT2;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the top-most element when asking for the LEFT element, and there are no horizontal relations", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 }
      ]);
      const direction = NAV_DIRECTIONS.LEFT;
      const expected = ELEMENT1;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should fallback to the top-most element when asking for the RIGHT element, and there are no horizontal relations", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: ELEMENT3 }
      ]);
      const direction = NAV_DIRECTIONS.RIGHT;
      const expected = ELEMENT1;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should skip the bottom-most element when asking for the bottom element, and the bottom-most element is not mounted", () => {
      const directionMaps = getDirectionMaps([
        { topElement: ELEMENT1, bottomElement: ELEMENT2 },
        { topElement: ELEMENT2, bottomElement: UNMOUNTED_ELEMENT_1 }
      ]);
      const direction = NAV_DIRECTIONS.DOWN;
      const expected = ELEMENT2;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });

    it("should skip the two right-most elements when asking for the right element, and the two right-most elements are not mounted", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT1, rightElement: UNMOUNTED_ELEMENT_2 },
        { leftElement: UNMOUNTED_ELEMENT_2, rightElement: UNMOUNTED_ELEMENT_1 }
      ]);
      const direction = NAV_DIRECTIONS.RIGHT;
      const expected = ELEMENT1;

      const result = getOutmostElementInDirection(directionMaps, direction);

      expect(result).toEqual(expected);
    });
  });

  describe("getNextElementToFocusInDirection", () => {
    it("should return null if the referenced element isn't positioned on that direction", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT2, rightElement: ELEMENT4 },
        { leftElement: ELEMENT4, rightElement: ELEMENT5 }
      ]);
      const directionMap = directionMaps[NAV_DIRECTIONS.RIGHT];

      const result = getNextElementToFocusInDirection(directionMap, ELEMENT1); // ELEMENT1 isn't mapped

      expect(result).toBeNull();
    });

    it("return null if there's only one next ref, and it is currently null", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: UNMOUNTED_ELEMENT_1 }]);
      const directionMap = directionMaps[NAV_DIRECTIONS.RIGHT];

      const result = getNextElementToFocusInDirection(directionMap, ELEMENT1);

      expect(result).toBeNull();
    });

    it("return null if there's only one next ref, and it is disabled", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: DISABLED_ELEMENT }]);
      const directionMap = directionMaps[NAV_DIRECTIONS.RIGHT];

      const result = getNextElementToFocusInDirection(directionMap, ELEMENT1);

      expect(result).toBeNull();
    });

    it("return null if there's only one next ref, and it is disabled with data-disabled='true'", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: DISABLED_DATASET_ELEMENT }]);
      const directionMap = directionMaps[NAV_DIRECTIONS.RIGHT];

      const result = getNextElementToFocusInDirection(directionMap, ELEMENT1);

      expect(result).toBeNull();
    });

    it("return the next element ref even if it has data-disabled='false'", () => {
      const directionMaps = getDirectionMaps([{ leftElement: ELEMENT1, rightElement: DATASET_NOT_DISABLED_ELEMENT }]);
      const directionMap = directionMaps[NAV_DIRECTIONS.RIGHT];

      const result = getNextElementToFocusInDirection(directionMap, ELEMENT1);

      expect(result).toBe(DATASET_NOT_DISABLED_ELEMENT);
    });

    it("return the next element ref in the given direction which is focusable, while skipping disabled or unmounted elements", () => {
      const directionMaps = getDirectionMaps([
        { leftElement: ELEMENT1, rightElement: UNMOUNTED_ELEMENT_1 },
        { leftElement: UNMOUNTED_ELEMENT_1, rightElement: DISABLED_ELEMENT },
        { leftElement: DISABLED_ELEMENT, rightElement: ELEMENT2 }
      ]);
      const directionMap = directionMaps[NAV_DIRECTIONS.RIGHT];

      const result = getNextElementToFocusInDirection(directionMap, ELEMENT1);

      expect(result).toBe(ELEMENT2);
    });
  });
});
