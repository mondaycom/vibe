export const jsx = `() => {
  const [timesClicked, setTimesClicked] = React.useState<number>(0);

  function onButtonClick(): void {
    if (timesClicked === 0) {
      alert("isn't that nice?");
    }
    setTimesClicked(prev => prev + 1);
  }

  return (
    <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
      <div>
        <VibeNext.Heading>Online Playground</VibeNext.Heading>
        <VibeNext.Heading type={VibeNext.Heading.types.H3} color={VibeNext.Heading.colors.SECONDARY}>
          Prototype with actual components
        </VibeNext.Heading>
      </div>
      <div>
        <Text>Can't see the code editor?</Text>
        <Text element="span">
          Click on the <VibeIcons.Settings /> button on the left panel and
          select the{" "}
        </Text>
        <Text element="span" weight={Text.weights.BOLD}>
          "Change Addons Orientation"
        </Text>
      </div>
      <Button onClick={onButtonClick}>
        Click me
      </Button>
      <Text>Button has been clicked {timesClicked} times</Text>
    </Flex>
  );
}`;

export const css = `.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-medium);
}

.action-button {
  align-self: flex-start;
}`;

export default { jsx, css };
