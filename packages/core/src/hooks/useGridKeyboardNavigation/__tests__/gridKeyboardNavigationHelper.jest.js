import { NavDirections } from "../../useFullKeyboardListeners";
import {
  calcActiveIndexAfterArrowNavigation,
  getActiveIndexFromInboundNavigation
} from "../gridKeyboardNavigationHelper";

describe("getActiveIndexFromInboundNavigation", () => {
  describe("direction - left", () => {
    const direction = NavDirections.LEFT;

    it("should return the last item in the 2nd row when there are 4 rows", () => {
      const itemsCount = 12;
      const numberOfItemsInLine = 3;
      const expectedResult = 5;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the last item in the 2rd row when there are 3 rows", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 3;
      const expectedResult = 5;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the last item in the first row when there is one row which is full", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 5;
      const expectedResult = 4;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the last item in the first row when there is one row which is not full", () => {
      const itemsCount = 3;
      const numberOfItemsInLine = 5;
      const expectedResult = 2;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("direction - right", () => {
    const direction = NavDirections.RIGHT;

    it("should return the first item in the 2nd row when there are 4 rows", () => {
      const itemsCount = 12;
      const numberOfItemsInLine = 3;
      const expectedResult = 3;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the first item in the 2nd row when there are 3 rows", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 3;
      const expectedResult = 3;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the first item in the first row when there is one row which is full", () => {
      const itemsCount = 7;
      const numberOfItemsInLine = 7;
      const expectedResult = 0;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the first item in the first row when there is one row which is not full", () => {
      const itemsCount = 3;
      const numberOfItemsInLine = 7;
      const expectedResult = 0;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("direction - up", () => {
    const direction = NavDirections.UP;

    it("should return the third item in the last row when the last row has 5 elements out of 5", () => {
      const itemsCount = 15;
      const numberOfItemsInLine = 5;
      const expectedResult = 12;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the third item in the last row when the last row has 3 elements out of 5", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 5;
      const expectedResult = 2;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the first item in the last row when the last row has 1 element out of 5", () => {
      const itemsCount = 6;
      const numberOfItemsInLine = 5;
      const expectedResult = 5;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("direction - down", () => {
    const direction = NavDirections.DOWN;

    it("should return the third item in the first row when the first row has 5 elements out of 5", () => {
      const itemsCount = 10;
      const numberOfItemsInLine = 5;
      const expectedResult = 2;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the third item in the first row when the first row has 3 elements out of 5", () => {
      const itemsCount = 3;
      const numberOfItemsInLine = 5;
      const expectedResult = 2;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });

    it("should return the first item in the first row when the first row has 1 element out of 5", () => {
      const itemsCount = 1;
      const numberOfItemsInLine = 5;
      const expectedResult = 0;

      const result = getActiveIndexFromInboundNavigation({ direction, itemsCount, numberOfItemsInLine });

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("calcActiveIndexAfterArrowNavigation", () => {
  describe("direction - up", () => {
    const direction = NavDirections.UP;

    it("should return the 3rd index of the first row when navigating from 3rd item of second row", () => {
      const itemsCount = 12;
      const numberOfItemsInLine = 3;
      const activeIndex = 5;
      const expectedResult = { isOutbound: false, nextIndex: 2 };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from 3rd item of first row", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 4;
      const activeIndex = 2;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from the first item of first row", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 4;
      const activeIndex = 0;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("direction - down", () => {
    const direction = NavDirections.DOWN;

    it("should return the 3rd index of the second row when navigating from 3rd item of first row", () => {
      const itemsCount = 12;
      const numberOfItemsInLine = 3;
      const activeIndex = 2;
      const expectedResult = { isOutbound: false, nextIndex: 5 };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from the 3rd index of the first row, and second row has only 2 items", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 3;
      const activeIndex = 2;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from first item of the last row", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 3;
      const activeIndex = 3;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("direction - left", () => {
    const direction = NavDirections.LEFT;

    it("should return the second index of the second row when navigating from the third index of the second row", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 4;
      const activeIndex = 6;
      const expectedResult = { isOutbound: false, nextIndex: 5 };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from the first index of the second row", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 4;
      const activeIndex = 4;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from the first index of the first row", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 4;
      const activeIndex = 0;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("direction - right", () => {
    const direction = NavDirections.RIGHT;

    it("should return the third index of the second row when navigating from the second index of the second row", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 4;
      const activeIndex = 5;
      const expectedResult = { isOutbound: false, nextIndex: 6 };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from the last index of the second row, when second row is full", () => {
      const itemsCount = 9;
      const numberOfItemsInLine = 4;
      const activeIndex = 7;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });

    it("should return 'isOutbound = true' when navigating from the last index of the last row, when last row is not completely full", () => {
      const itemsCount = 5;
      const numberOfItemsInLine = 3;
      const activeIndex = 4;
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({ direction, itemsCount, numberOfItemsInLine, activeIndex });

      expect(result).toEqual(expectedResult);
    });
  });

  describe("disabled indexes", () => {
    it("should skip a single disabled index", () => {
      const direction = NavDirections.RIGHT;
      const itemsCount = 9;
      const numberOfItemsInLine = 5;
      const activeIndex = 0;
      const disabledIndexes = [1, 3];
      const expectedResult = { isOutbound: false, nextIndex: 2 }; // skip 1, which is a disabled index

      const result = calcActiveIndexAfterArrowNavigation({
        direction,
        itemsCount,
        numberOfItemsInLine,
        activeIndex,
        disabledIndexes
      });

      expect(result).toEqual(expectedResult);
    });

    it("should return outbound navigation when skipping over disabled index 0", () => {
      const direction = NavDirections.LEFT;
      const itemsCount = 2;
      const numberOfItemsInLine = 2;
      const activeIndex = 1;
      const disabledIndexes = [0];
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({
        direction,
        itemsCount,
        numberOfItemsInLine,
        activeIndex,
        disabledIndexes
      });

      expect(result).toEqual(expectedResult);
    });

    it("should skip multiple disabled sequential indexes in an inbound navigation", () => {
      const direction = NavDirections.UP;
      const itemsCount = 10;
      const numberOfItemsInLine = 2;
      const activeIndex = 8; // last row, left item
      const disabledIndexes = [2, 4, 6]; // all the items of the left column
      const expectedResult = { isOutbound: false, nextIndex: 0 };

      const result = calcActiveIndexAfterArrowNavigation({
        direction,
        itemsCount,
        numberOfItemsInLine,
        activeIndex,
        disabledIndexes
      });

      expect(result).toEqual(expectedResult);
    });

    it("should return an outbound navigation when all indexes in the navigation direction are disabled", () => {
      const direction = NavDirections.UP;
      const itemsCount = 5;
      const numberOfItemsInLine = 5;
      const activeIndex = 0; // last row, left item
      const disabledIndexes = [1, 2, 3, 4]; // all the items except for the first one
      const expectedResult = { isOutbound: true };

      const result = calcActiveIndexAfterArrowNavigation({
        direction,
        itemsCount,
        numberOfItemsInLine,
        activeIndex,
        disabledIndexes
      });

      expect(result).toEqual(expectedResult);
    });
  });
});
