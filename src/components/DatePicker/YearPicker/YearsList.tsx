import Button from "../../Button/Button";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};

interface YearsListProps {
  yearsItems: number[];
  isYearBlocked?: (year: number) => boolean;
  onSelect: (year: number) => void;
  selectedYear: string;
}

const YearsList = ({ yearsItems, isYearBlocked, onSelect, selectedYear }: YearsListProps) => {
  return (
    <>
      {yearsItems.map(currYear => {
        const shouldBlockYear = isYearBlocked && isYearBlocked(currYear);
        const onClick = !shouldBlockYear ? () => onSelect(currYear) : NOOP;
        const kind = parseInt(selectedYear, 10) === currYear ? Button?.kinds?.PRIMARY : Button?.kinds?.TERTIARY;

        return (
          <Button key={currYear} kind={kind} onClick={onClick} disabled={shouldBlockYear} marginLeft marginRight>
            {currYear.toString()}
          </Button>
        );
      })}
    </>
  );
};

export default YearsList;
