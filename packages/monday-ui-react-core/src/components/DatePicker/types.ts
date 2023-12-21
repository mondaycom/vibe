import moment from "moment";

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
  startDate: Moment | null;
  endDate: Moment | null;
}
