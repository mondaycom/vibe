# Storybook Code Examples

## Overview

```tsx
DatePickerTemplate = (args: DatePickerProps) => {
  const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
  return <DialogContentContainer className={styles.datepickerDialogContentContainer}>
      <DatePicker data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} {...args} />
    </DialogContentContainer>;
}
```

## Single Day

```tsx
const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
return <DialogContentContainer className={styles.datepickerDialogContentContainer}>
        <DatePicker data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} />
      </DialogContentContainer>;
```

## Date Range

```tsx
const [date, setDate] = useState(MOCK_INITIAL_DATE);
return <DialogContentContainer className={styles.datepickerDialogContentContainer}>
        <DatePicker date={date.startDate} endDate={date.endDate} range data-testid="date-picker" onPickDate={(d: RangeDate) => setDate(d)} />
      </DialogContentContainer>;
```

## Number Of Months

```tsx
const [date, setDate] = useState(MOCK_INITIAL_DATE.startDate);
return <DialogContentContainer className={styles.datepickerDialogContentContainer}>
        <DatePicker numberOfMonths={2} data-testid="date-picker" date={date} onPickDate={(d: Moment) => setDate(d)} />
      </DialogContentContainer>;
```

