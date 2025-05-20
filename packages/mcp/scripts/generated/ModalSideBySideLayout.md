# Storybook Code Examples

## Overview

```tsx
const steps = [<ModalSideBySideLayout>
        <ModalHeader title="Side by side modal" description={<Text type="text1">
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>} />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Side by side modal" description={<Text type="text1">
              Modal subtitle, can come with icon <Link inheritFontSize inlineText text="and link." />
            </Text>} />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>];
const {
  activeStep,
  direction,
  next,
  back,
  isFirstStep,
  isLastStep,
  goToStep
} = useWizard({
  stepCount: steps.length
});
const primaryButtonText = isLastStep ? "Confirm" : "Next";
return <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} style={{
  height: 400
}} container={container} {...args}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{
    text: primaryButtonText,
    onClick: next
  }} secondaryButton={{
    text: "Back",
    onClick: back,
    disabled: isFirstStep
  }} />
      </Modal>;
```

## Wizard

```tsx
const dropdownOptions = [{
  label: "English",
  value: "en"
}, {
  label: "Hebrew",
  value: "he"
}];
const steps = [<ModalSideBySideLayout>
        <ModalHeader title="Modal with wizard" description="Fill in the details" />
        <ModalContent>
          <Flex direction="column" gap="medium">
            <TextField title="Full name" placeholder="John Dow" />
            <TextField title="Email" placeholder="Email@monday.com" />
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Modal with wizard" description="Update your settings defenitions" />
        <ModalContent>
          <Flex direction="column" gap="medium" align="stretch">
            <TextField title="Fill address" placeholder="City, street, number" />
            <Flex direction="column" align="stretch">
              <FieldLabel labelText="Language preferences" />
              <Dropdown insideOverflowWithTransformContainer insideLayerContext size="small" placeholder={dropdownOptions[0].label} options={dropdownOptions} />
            </Flex>
          </Flex>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>];
const {
  activeStep,
  direction,
  next,
  back,
  isFirstStep,
  isLastStep,
  goToStep
} = useWizard({
  stepCount: steps.length
});
const primaryButtonText = isLastStep ? "Confirm" : "Next";
return <Modal id="modal-sbs" show={show} size="large" onClose={() => setShow(false)} container={container} style={{
  height: 400
}}>
        <TransitionView activeStep={activeStep} direction={direction}>
          {steps}
        </TransitionView>
        <ModalFooterWizard activeStep={activeStep} stepCount={steps.length} onStepClick={goToStep} primaryButton={{
    text: primaryButtonText,
    onClick: next
  }} secondaryButton={{
    text: "Back",
    onClick: back,
    disabled: isFirstStep
  }} />
      </Modal>;
```

## HeaderWithIconButton

```tsx
return <Modal id="modal-sbs" show={show} renderHeaderAction={<IconButton icon={Menu} size="small" kind="tertiary" ariaLabel="Open Menu" />} size="large" onClose={() => setShow(false)} container={container} style={{
  height: 400
}}>
        <ModalSideBySideLayout>
          <ModalHeader title="Modal title" />
          <ModalContent>
            <Text type="text1" align="inherit" element="p">
              Modal content will appear here, you can custom it however you want, according to the user needs. Please
              make sure that the content is clear for completing the relevant task.
            </Text>
          </ModalContent>
          <ModalMedia>
            <img src={mediaImage} alt="side by side placeholder" style={{
        width: "100%",
        objectFit: "cover"
      }} />
          </ModalMedia>
        </ModalSideBySideLayout>
        <ModalFooter primaryButton={{
    text: "Confirm",
    onClick: () => setShow(false)
  }} secondaryButton={{
    text: "Cancel",
    onClick: () => setShow(false)
  }} />
      </Modal>;
```

## Animation

```tsx
const [showAnchor, setShowAnchor] = useState(false);
const [showCenterPop, setShowCenterPop] = useState(false);
const [showTransition, setShowTransition] = useState(false);
const anchorButtonRef = useRef<HTMLButtonElement>(null);
const transitionSteps = [<ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>, <ModalSideBySideLayout>
        <ModalHeader title="Modal title" />
        <ModalContent>
          <Text type="text1" align="inherit" element="p">
            Modal content will appear here, you can custom it however you want, according to the user needs. Please make
            sure that the content is clear for completing the relevant task.
          </Text>
        </ModalContent>
        <ModalMedia>
          <img src={mediaImage} alt="side by side placeholder" style={{
      width: "100%",
      objectFit: "cover"
    }} />
        </ModalMedia>
      </ModalSideBySideLayout>];
const {
  activeStep,
  direction,
  next,
  back,
  isFirstStep,
  isLastStep,
  goToStep
} = useWizard({
  stepCount: transitionSteps.length
});
return <>
        <Flex gap="large" style={{
    paddingBlock: 40
  }}>
          <Button ref={anchorButtonRef} onClick={() => setShowAnchor(true)}>
            Anchor
          </Button>
          <Button onClick={() => setShowCenterPop(true)}>Center pop</Button>
          <Button onClick={() => setShowTransition(true)}>Transition</Button>
        </Flex>

        <Modal id="modal-sbs-anchor" show={showAnchor} anchorElementRef={anchorButtonRef} size="large" onClose={() => setShowAnchor(false)} style={{
    height: 400
  }}>
          <ModalSideBySideLayout>
            <ModalHeader title="Modal title" />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
            <ModalMedia>
              <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
            </ModalMedia>
          </ModalSideBySideLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowAnchor(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowAnchor(false)
    }} />
        </Modal>

        <Modal id="modal-sbs-center" show={showCenterPop} size="large" onClose={() => setShowCenterPop(false)} style={{
    height: 400
  }}>
          <ModalSideBySideLayout>
            <ModalHeader title="Modal title" />
            <ModalContent>
              <Text type="text1" align="inherit" element="p">
                Modal content will appear here, you can custom it however you want, according to the user needs. Please
                make sure that the content is clear for completing the relevant task.
              </Text>
            </ModalContent>
            <ModalMedia>
              <img src={mediaImage} alt="side by side placeholder" style={{
          width: "100%",
          objectFit: "cover"
        }} />
            </ModalMedia>
          </ModalSideBySideLayout>
          <ModalFooter primaryButton={{
      text: "Confirm",
      onClick: () => setShowCenterPop(false)
    }} secondaryButton={{
      text: "Cancel",
      onClick: () => setShowCenterPop(false)
    }} />
        </Modal>

        <Modal id="modal-sbs-transition" show={showTransition} size="large" onClose={() => setShowTransition(false)} style={{
    height: 400
  }}>
          <TransitionView activeStep={activeStep} direction={direction}>
            {transitionSteps}
          </TransitionView>
          <ModalFooterWizard activeStep={activeStep} stepCount={transitionSteps.length} onStepClick={goToStep} primaryButton={{
      text: isLastStep ? "Confirm" : "Next",
      onClick: next
    }} secondaryButton={{
      text: "Back",
      onClick: back,
      disabled: isFirstStep
    }} />
        </Modal>
      </>;
```

