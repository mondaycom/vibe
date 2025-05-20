# Storybook Code Examples

## Placements

```tsx
const steps: Step[] = useMemo(() => [{
  key: "FULFILLED",
  status: "fulfilled",
  titleText: "Fulfilled title",
  subtitleText: "Fulfilled subtitle"
}, {
  key: "ACTIVE",
  status: "active",
  titleText: "Active title",
  subtitleText: "Active subtitle"
}, {
  key: "PENDING",
  status: "pending",
  titleText: "Pending title",
  subtitleText: "Pending subtitle"
}], []);
return <div className="monday-storybook-multiStepIndicator_column-wrapper">
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Vertical</span>
          <MultiStepIndicator className="monday-storybook-multiStepIndicator_size" textPlacement="vertical" steps={steps} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Horizontal</span>
          <MultiStepIndicator steps={steps} />
        </div>
      </div>;
```

## Types

```tsx
const steps: Step[] = useMemo(() => [{
  key: "FULFILLED",
  status: "fulfilled",
  titleText: "Fulfilled title",
  subtitleText: "Fulfilled subtitle"
}, {
  key: "ACTIVE",
  status: "active",
  titleText: "Active title",
  subtitleText: "Active subtitle"
}, {
  key: "PENDING",
  status: "pending",
  titleText: "Pending title",
  subtitleText: "Pending subtitle"
}], []);
return <div className="monday-storybook-multiStepIndicator_column-wrapper">
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Primary</span>
          <MultiStepIndicator steps={steps} type="primary" />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Success</span>
          <MultiStepIndicator steps={steps} type="success" />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Danger</span>
          <MultiStepIndicator steps={steps} type="danger" />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Dark</span>
          <MultiStepIndicator steps={steps} type="dark" />
        </div>
      </div>;
```

## Sizes

```tsx
const steps: Step[] = useMemo(() => [{
  key: "FULFILLED",
  status: "fulfilled",
  titleText: "Fulfilled title",
  subtitleText: "Fulfilled subtitle"
}, {
  key: "ACTIVE",
  status: "active",
  titleText: "Active title",
  subtitleText: "Active subtitle"
}, {
  key: "PENDING",
  status: "pending",
  titleText: "Pending",
  subtitleText: "Pending subtitle"
}], []);
return <Flex direction="column" align="start" gap="small">
        <StoryDescription description="Regular">
          <MultiStepIndicator steps={steps} size="regular" />
        </StoryDescription>
        <StoryDescription description="Compact">
          <MultiStepIndicator className="multi_step_indicator_compact" steps={steps} size="compact" />
        </StoryDescription>
      </Flex>;
```

## FulfilledIcons

```tsx
const steps: Step[] = useMemo(() => [{
  key: "FULFILLED",
  status: "fulfilled",
  titleText: "Fulfilled title",
  subtitleText: "Fulfilled subtitle"
}, {
  key: "ACTIVE",
  status: "active",
  titleText: "Active title",
  subtitleText: "Active subtitle"
}, {
  key: "PENDING",
  status: "pending",
  titleText: "Pending title",
  subtitleText: "Pending subtitle"
}], []);
return <div className="monday-storybook-multiStepIndicator_column-wrapper">
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Default (check)</span>
          <MultiStepIndicator steps={steps} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Number instead of icon</span>
          <MultiStepIndicator steps={steps} isFulfilledStepDisplayNumber={true} />
        </div>
        <div className="monday-storybook-multiStepIndicator_row-wrapper">
          <span className="monday-storybook-multiStepIndicator_title">Custom </span>
          <MultiStepIndicator steps={steps} fulfilledStepIcon={Upgrade} />
        </div>
      </div>;
```

## TransitionAnimation

```tsx
const exampleSteps = useMemo<Record<string, Step>>(() => ({
  firstStep: {
    key: "PENDING",
    status: "pending",
    titleText: "First step title",
    subtitleText: "First subtitle"
  },
  secondStep: {
    key: "PENDING-2",
    status: "pending",
    titleText: "Second step title",
    subtitleText: "Second subtitle"
  },
  thirdStep: {
    key: "PENDING-3",
    status: "pending",
    titleText: "Third step title",
    subtitleText: "Third subtitle"
  }
}), []);
const [steps, setSteps] = useState<Step[]>([{
  ...exampleSteps.firstStep
}, {
  ...exampleSteps.secondStep
}, {
  ...exampleSteps.thirdStep
}]);
const clearSteps = useCallback(() => {
  setSteps([{
    ...exampleSteps.firstStep
  }, {
    ...exampleSteps.secondStep
  }, {
    ...exampleSteps.thirdStep
  }]);
}, [exampleSteps.firstStep, exampleSteps.secondStep, exampleSteps.thirdStep]);
const [numActions, setNumActions] = useState(0);
const getStepKeyForTransition = useCallback(() => {
  if (numActions < 2) return "firstStep";else if (numActions < 4) return "secondStep";else return "thirdStep";
}, [numActions]);
const STEP_TRANSITIONS = useMemo(() => ({
  [StepStatus.PENDING]: StepStatus.ACTIVE,
  [StepStatus.ACTIVE]: StepStatus.FULFILLED,
  [StepStatus.FULFILLED]: StepStatus.PENDING
}), []);
const performIndicatorStateTransition = useCallback(() => {
  if (numActions === steps.length * 2) {
    clearSteps();
    setNumActions(0);
    return;
  }
  const stepKey = getStepKeyForTransition();
  const copySteps = {
    firstStep: {
      ...steps[0]
    },
    secondStep: {
      ...steps[1]
    },
    thirdStep: {
      ...steps[2]
    }
  };
  copySteps[stepKey].status = STEP_TRANSITIONS[copySteps[stepKey].status];
  setSteps([{
    ...copySteps.firstStep
  }, {
    ...copySteps.secondStep
  }, {
    ...copySteps.thirdStep
  }]);
  setNumActions(numActions + 1);
}, [numActions, steps, getStepKeyForTransition, STEP_TRANSITIONS, clearSteps]);
useEffect(() => {
  const interval = setInterval(performIndicatorStateTransition, 2000);
  return () => {
    clearInterval(interval);
  };
}, [performIndicatorStateTransition]);
return <MultiStepIndicator steps={steps} />;
```

## MultiStepWizard

```tsx
const steps: Step[] = useMemo(() => [{
  key: "FULFILLED",
  status: "fulfilled",
  titleText: "Step 1",
  subtitleText: "Learn how to use monday CRM"
}, {
  key: "PENDING",
  status: "pending",
  titleText: "Step 2",
  subtitleText: "Integrate your email"
}, {
  key: "PENDING-3",
  status: "pending",
  titleText: "Step 3",
  subtitleText: "Import your data"
}], []);
return <MultiStepIndicator className="monday-storybook-multiStepIndicator_big-size" steps={steps} textPlacement="vertical" />;
```

