# Storybook Code Examples

## Overview

```tsx
tipseenTemplate = ({
  title,
  children,
  position,
  ...otherArgs
}: TipseenProps & TipseenContentProps) => {
  return <Tipseen
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  // Therefore, there is no need to move this prop in your implementations.
  modifiers={modifiers} position={position} content={<TipseenContent title={title}>{children}</TipseenContent>} {...otherArgs}>
      <div className="monday-storybook-tipseen_container" />
    </Tipseen>;
}
```

## Colors

```tsx
return <>
          <div className="monday-storybook-tipseen_small-box">
            <Tipseen modifiers={modifiers} position="right" content={<TipseenContent title="This is a title">
                  Message for the user will appear here, to give more information about the feature.
                </TipseenContent>}>
              <div className="monday-storybook-tipseen_container" />
            </Tipseen>
          </div>
          <div className="monday-storybook-tipseen_small-box">
            <Tipseen modifiers={modifiers} position="right" color="primary" content={<TipseenContent title="This is a title">
                  Message for the user will appear here, to give more information about the feature.
                </TipseenContent>}>
              <div className="monday-storybook-tipseen_container" />
            </Tipseen>
          </div>
        </>;
```

## Tipseen with a wizard

```tsx
const content = [<div>Popover message №1 will appear here</div>, <div>Popover message №2 will appear here</div>, <div>Popover message №3 will appear here</div>, <div>Popover message №4 will appear here</div>, <div>Popover message №5 will appear here</div>];
const [activeStepIndex, setActiveStepIndex] = useState(2);
const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
  setActiveStepIndex(stepIndex);
}, []);
return <Tipseen modifiers={modifiers} position="right" content={<TipseenWizard title="This is a title" steps={content} activeStepIndex={activeStepIndex} onChangeActiveStep={onChangeActiveStep} onFinish={() => {}} />}>
          <div className="monday-storybook-tipseen_container" />
        </Tipseen>;
```

## Tipseen with image

```tsx
const content = [<div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>, <div>Message for the user will appear here, to give more information about the feature.</div>];
return <Tipseen position="right" modifiers={modifiers} closeButtonTheme="light" content={<>
              <TipseenImage className="monday-storybook-tipseen_image" src={picture} />
              <TipseenWizard title="This is a title" steps={content} activeStepIndex={2} />
            </>}>
          <div className="monday-storybook-tipseen_big-container" />
        </Tipseen>;
```

## Tipseen with custom media

```tsx
return <Tipseen position="right" modifiers={modifiers} closeButtonTheme="dark" content={<>
              <TipseenMedia>
                <video autoPlay muted loop src={video} style={{
      width: "100%"
    }} />
              </TipseenMedia>
              <TipseenContent title="This is a title">
                Message for the user will appear here, to give more information about the feature.
              </TipseenContent>
            </>}>
          <div className="monday-storybook-tipseen_big-container" />
        </Tipseen>;
```

## Floating Tipseen

```tsx
return <Tipseen closeButtonTheme="dark" floating content={<>
            <TipseenImage className="monday-storybook-tipseen_image" src={picture} />
            <TipseenContent title="This is a Floating Tipseen">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          </>}
// You do not have to use containerSelector, in current use this is for story only
containerSelector="#story--components-tipseen--floating-tipseen" />;
```

