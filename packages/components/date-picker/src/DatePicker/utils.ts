import { isAfter, isBefore, isSameDay } from "date-fns";
import { type DateRange, type Matcher } from "react-day-picker";

export type Intent = "to" | "from";

export function addToRange(day: Date, { from, to }: DateRange, intent: Intent): DateRange {
  if (!from && !to) {
    return intent === "from" ? { from: day, to: undefined } : { from: undefined, to: day };
  }

  if (!from) {
    if (isBefore(day, to)) {
      return { from: day, to };
    }

    return { from: to, to: day };
  }

  if (!to) {
    if (isBefore(day, from)) {
      return { from: day, to: from };
    }

    return { from, to: day };
  }

  if (intent === "to") {
    if (isSameDay(day, from) && isSameDay(day, to)) {
      return { from: undefined };
    }

    if (isSameDay(day, from)) {
      // both from & to selected + user clicks on start -> clear selection
      return { from: undefined };
    }

    if (isBefore(day, from)) {
      return { from: day, to };
    }

    if (isAfter(day, from) && isBefore(day, to)) {
      return { from, to: day };
    }

    if (isAfter(day, to) || isSameDay(day, to)) {
      return { from, to: day };
    }
  } else {
    // intent is from
    if (isSameDay(day, from) && isSameDay(day, to)) {
      return { from: undefined };
    }

    if (isSameDay(day, to)) {
      return { from: day, to: day };
    }

    if (isAfter(day, to)) {
      return { from, to: day };
    }

    if (isBefore(day, to) && isAfter(day, from)) {
      return { from: day, to };
    }

    if (isBefore(day, from)) {
      return { from: day, to };
    }

    if (isSameDay(day, to)) {
      // both from & to selected + user clicks on end -> end becomes start
      return { from: day };
    }
  }

  return { from, to: day };
}

const isInRange = (day: Date, range: DateRange): boolean => {
  if (!range.from || !range.to) {
    return false;
  }

  return (
    (isAfter(day, range.from) || isSameDay(day, range.from)) && (isBefore(day, range.to) || isSameDay(day, range.to))
  );
};

export const AddToRangeMiddle = "addToRangeMiddle";
export const AddToRangeStart = "addToRangeStart";
export const AddToRangeEnd = "addToRangeEnd";
export const RemoveFromRange = "removeFromRange";
export const HoveredDayExists = "HoveredDayExists";
export const HalfRangeSelected = "HalfRangeSelected";

type GetDateNextStateResult =
  | typeof AddToRangeMiddle
  | typeof AddToRangeStart
  | typeof AddToRangeEnd
  | typeof RemoveFromRange
  | undefined;

export function addToRangeNextState(
  day: Date,
  dayToAdd: Date,
  range: DateRange,
  intent: Intent
): GetDateNextStateResult {
  if (!dayToAdd) {
    return undefined;
  }

  const nextRange = addToRange(dayToAdd, range, intent);

  if (!isInRange(day, nextRange) && !isInRange(day, range)) {
    return undefined;
  }

  if (isSameDay(day, nextRange.to) && !isSameDay(day, range.to)) {
    return AddToRangeEnd;
  }

  if (isSameDay(day, nextRange.from) && !isSameDay(day, range.from)) {
    return AddToRangeStart;
  }

  if (isInRange(day, nextRange)) {
    if (isInRange(day, range)) {
      return undefined;
    }

    if (isSameDay(day, nextRange.from)) {
      return AddToRangeStart;
    }

    if (isSameDay(day, nextRange.to)) {
      return AddToRangeEnd;
    }

    return !isInRange(dayToAdd, range) ? AddToRangeMiddle : undefined;
  }

  return isInRange(dayToAdd, range) ? RemoveFromRange : undefined;
}

export function addToRangeModifiers(dayToAdd: Date, range: DateRange, intent: Intent): Record<string, Matcher> {
  return {
    [HoveredDayExists]: () => !!dayToAdd,
    [HalfRangeSelected]: () => !!(range && ((!range.from && range.to) || (range.from && !range.to))),
    [AddToRangeMiddle]: (day: Date) => addToRangeNextState(day, dayToAdd, range, intent) === AddToRangeMiddle,
    [AddToRangeStart]: (day: Date) => addToRangeNextState(day, dayToAdd, range, intent) === AddToRangeStart,
    [AddToRangeEnd]: (day: Date) => addToRangeNextState(day, dayToAdd, range, intent) === AddToRangeEnd,
    [RemoveFromRange]: (day: Date) => addToRangeNextState(day, dayToAdd, range, intent) === RemoveFromRange
  };
}
