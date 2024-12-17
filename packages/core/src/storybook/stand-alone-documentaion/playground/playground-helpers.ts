export const jsx = `() => {
  const [timesClicked, setTimesClicked] = useState<number>(0);

  function onButtonClick(): void {
    setTimesClicked(prev => prev + 1);
  }

  return (
    <Flex direction="column" gap={40} className="playground">
      <img src={vibeLogo} alt="Vibe Logo" className="vibe-logo" />
      <section>
        <Heading type="h3" align="center" color="secondary">
          Playground
        </Heading>
        <Text type="text2" color="secondary" ellipsis={false}>
          Craft, Experiment, and Innovate with Vibe.
        </Text>
      </section>
      <Flex direction="column" align="center" justify="center" gap="small">
        <Button kind="secondary" size="small" onClick={onButtonClick}>
          Clicked {timesClicked} time{timesClicked === 1 ? "" : "s"}
        </Button>
        <Text type="text3" color="secondary" ellipsis={false}>
          Tip: Can't see the editor? Click 'D' on your keyboard
        </Text>
      </Flex>
    </Flex>
  );
}`;

export const css = `.playground {
  padding-block-start: 40px;
  margin: 0;
  width: 100vw;
}

.vibe-logo {
  width: 150px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.vibe-logo:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 0 32px rgba(80, 52, 255, 0.3));
}
`;

export default { jsx, css };
