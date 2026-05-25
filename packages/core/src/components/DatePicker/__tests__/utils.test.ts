import { describe, it, expect } from "vitest";
import { addToRange } from "../utils";

describe("utils", () => {
  describe("addToRange", () => {
    const today = new Date();

    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    describe("intent is 'to'", () => {
      it("'from' and 'to' are undefined", () => {
        const result = addToRange(today, { from: undefined, to: undefined }, "to");
        expect(result).toEqual({ from: undefined, to: today });
      });

      describe("'from' is defined and 'to' is undefined", () => {
        it("day is after 'from'", () => {
          const result = addToRange(tomorrow, { from: yesterday, to: undefined }, "to");
          expect(result).toEqual({ from: yesterday, to: tomorrow });
        });

        it("day is before 'from'", () => {
          const result = addToRange(yesterday, { from: tomorrow, to: undefined }, "to");
          expect(result).toEqual({ from: yesterday, to: tomorrow });
        });
      });

      describe("'from' is undefined and 'to' is defined", () => {
        it("day is before 'to'", () => {
          const result = addToRange(yesterday, { from: undefined, to: today }, "to");
          expect(result).toEqual({ from: yesterday, to: today });
        });

        it("day is after 'to'", () => {
          const result = addToRange(tomorrow, { from: undefined, to: yesterday }, "to");
          expect(result).toEqual({ from: yesterday, to: tomorrow });
        });
      });

      it("day is before 'from'", () => {
        const result = addToRange(yesterday, { from: today, to: tomorrow }, "to");
        expect(result).toEqual({ from: yesterday, to: tomorrow });
      });

      it("day is the same as 'from'", () => {
        const result = addToRange(yesterday, { from: yesterday, to: today }, "to");
        expect(result).toEqual({ from: undefined });
      });

      it("day is between 'from' and 'to'", () => {
        const result = addToRange(today, { from: yesterday, to: tomorrow }, "to");
        expect(result).toEqual({ from: yesterday, to: today });
      });

      it("day is the same as 'to'", () => {
        const result = addToRange(today, { from: yesterday, to: today }, "to");
        expect(result).toEqual({ from: yesterday, to: today });
      });

      it("day is after 'to'", () => {
        const result = addToRange(tomorrow, { from: yesterday, to: today }, "to");
        expect(result).toEqual({ from: yesterday, to: tomorrow });
      });
    });

    describe("intent is 'from'", () => {
      it("'from' and 'to' are undefined", () => {
        const result = addToRange(today, { from: undefined, to: undefined }, "from");
        expect(result).toEqual({ from: today, to: undefined });
      });

      describe("'from' is defined and 'to' is undefined", () => {
        it("day is after 'from'", () => {
          const result = addToRange(tomorrow, { from: yesterday, to: undefined }, "from");
          expect(result).toEqual({ from: yesterday, to: tomorrow });
        });

        it("day is before 'from'", () => {
          const result = addToRange(yesterday, { from: tomorrow, to: undefined }, "from");
          expect(result).toEqual({ from: yesterday, to: tomorrow });
        });
      });

      describe("'from' is undefined and 'to' is defined", () => {
        it("day is before 'to'", () => {
          const result = addToRange(yesterday, { from: undefined, to: today }, "from");
          expect(result).toEqual({ from: yesterday, to: today });
        });

        it("day is after 'to'", () => {
          const result = addToRange(tomorrow, { from: undefined, to: yesterday }, "from");
          expect(result).toEqual({ from: yesterday, to: tomorrow });
        });
      });

      it("day is before 'from'", () => {
        const result = addToRange(yesterday, { from: today, to: tomorrow }, "from");
        expect(result).toEqual({ from: yesterday, to: tomorrow });
      });

      it("day is the same as 'from'", () => {
        const result = addToRange(today, { from: today, to: tomorrow }, "from");
        expect(result).toEqual({ from: today, to: today });
      });

      it("day is between 'from' and 'to'", () => {
        const result = addToRange(today, { from: yesterday, to: tomorrow }, "from");
        expect(result).toEqual({ from: today, to: tomorrow });
      });

      it("day is the same as 'to'", () => {
        const result = addToRange(tomorrow, { from: yesterday, to: tomorrow }, "from");
        expect(result).toEqual({ from: tomorrow, to: tomorrow });
      });

      it("day is after 'to'", () => {
        const result = addToRange(tomorrow, { from: yesterday, to: today }, "from");
        expect(result).toEqual({ from: yesterday, to: tomorrow });
      });
    });
  });
});
