export const jsx = `<div className="container">
  <div>
    <VibeNext.Heading>Online Playground</VibeNext.Heading>
    <VibeNext.Heading type="h3" color="secondary">
      Prototype with actual components
    </VibeNext.Heading>
  </div>
  <div>
    <Text type={Text.types.TEXT2}>Can't see the code editor?</Text>
    <Text type={Text.types.TEXT2} element="span">Click on the <VibeIcons.Settings /> button on the left panel and select the</Text>
    <Text type={Text.types.TEXT2} element="span" weight={Text.weights.BOLD}>"Change Addons Orientation"</Text>
  </div>
  <Button onClick={() => alert("isn't that nice?")} className="action-button">Click me</Button>
</div>`;

export const css = `.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-medium);
}

.action-button {
  align-self: flex-start;
}`;

export default { jsx, css };
