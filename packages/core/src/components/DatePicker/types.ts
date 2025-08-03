import type moment from "moment";

export type Moment = moment.Moment;

export enum FocusInput {
  startDate = "startDate",
  endDate = "endDate"
}

export enum Direction {
  next = "next",
  prev = "prev"
}

export interface RangeDate {
  /**
   * The start date of the range.
   */
  startDate: Moment | null;
  /**
   * The end date of the range.
   */
  endDate: Moment | null;
}
